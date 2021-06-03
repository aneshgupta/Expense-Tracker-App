import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import firebase from "../api/config";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMsg: "", token: action.payload, loading: false };
    case "signout":
      return { token: null, errorMsg: "" };
    case "add_error":
      return { ...state, errorMsg: action.payload, loading: false };
    case "clear_error":
      return { ...state, errorMsg: "", loading: false };
    case "start_loading":
      return { ...state, errorMsg: "", loading: true };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });

    navigate("Discover");
  } else {
    navigate("Signin");
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    dispatch({ type: "start_loading" });
    await firebase.auth().signInWithEmailAndPassword(email, password);
    var user = firebase.auth().currentUser;
    const token = user.uid;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
    navigate("Discover");
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message });
    console.log(error.message);
  }
};

const signup = (dispatch) => async ({ email, password, name, number }) => {
  try {
    dispatch({ type: "start_loading" });
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = firebase.auth().currentUser;
    await user.updateProfile({
      displayName: name,
    });
    dispatch({ type: "clear_error" });
    navigate("Signin");
    console.log('Signed in ', user.uid);
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message });
    console.log(error.message);
  }
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    await firebase.auth().signOut();
    dispatch({ type: "sinout" });
    console.log('Signed out');

    navigate("Signin");
  } catch (error) {
    console.log(error.message);
  }
};

const clearErrorMsg = (dispatch) => () => {
  dispatch({ type: "clear_error" });
};

const isLoading = (dispatch) => () => {
  dispatch({ type: "start_loading" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, clearErrorMsg, tryLocalSignIn, signout, isLoading },
  { token: null, errorMsg: "", loading: false }
);
