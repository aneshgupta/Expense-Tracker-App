import createDataContext from "./createDataContext";
import firebase, { db } from "../api/config";
import { navigate } from "../navigationRef";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "get_name":
      return { ...state, name: action.payload };
    case "add_error":
      return { ...state, errorMsg: action.payload };
    case "clear_error":
      return { ...state, errorMsg: "" };
    case "get_sum":
      return { ...state, totalExp: action.payload };
    case "get":
      return { ...state, expenses: action.payload };
    case "add_expense":
      return { ...state, expenses: [...expenses, action.payload] };
    case "reset":
      return { expenses: [], totalExp: 0, errorMsg: "", name: "User" };
    default:
      return state;
  }
};

const getExpenses = (dispatch) => () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var arr = [],
        sum = 0;
      console.log(user.uid);

      db.collection("expenses")
        .where("user_id", "==", user.uid)
        .orderBy("updatedAt", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            arr = [
              ...arr,
              {
                title: doc.data().title,
                category: doc.data().category,
                amount: doc.data().amount,
                updatedAt: doc.data().updatedAt,
              },
            ];
            sum = sum + parseInt(doc.data().amount);
          });

          dispatch({ type: "get", payload: arr });
          dispatch({ type: "get_sum", payload: sum });
          dispatch({ type: "get_name", payload: user.displayName });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // No user is signed in.
    }
  });
};

const addExpense = (dispatch) => async (title, category, amount) => {
  if (!title || !amount) {
    dispatch({ type: "add_error", payload: "Please enter all fields!!!" });
    return;
  } else {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        db.collection("expenses")
          .add({
            user_id: user.uid,
            title,
            category,
            amount,
            updatedAt: new Date(),
          })
          .then((docRef) => {
            console.log(docRef.id);
          })
          .catch((error) => {
            console.log(error.message);
          });

        var obj = { title, category, amount };
        dispatch({ type: "clear_error", payload: obj });
        navigate("Discover");
      } else {
        // user not signedin
      }
    });
  }
};

const resetAll = (dispatch) => () => {
  dispatch({ type: "reset" });
};

export const { Context, Provider } = createDataContext(
  expenseReducer,
  { addExpense, getExpenses, resetAll },
  { expenses: [], totalExp: 0, errorMsg: "", name: "User" }
);
