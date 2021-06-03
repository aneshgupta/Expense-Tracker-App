import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import StatsScreen from "./src/screens/StatsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ReceiptsScreen from "./src/screens/ReceiptsScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as ExpenseProvider } from "./src/context/expenseContext";
import { setNavigator } from "./src/navigationRef";
import SplashScreen from "./src/screens/SplashScreen";

const BottomTab = createBottomTabNavigator(
  {
    Discover: DiscoverScreen,
    Receipts: ReceiptsScreen,
    AddExpense: AddExpenseScreen,
    Stats: StatsScreen,
    Profile: ProfileScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "#aaa",
      showLabel: true,
      safeAreaInsets: "bottom",
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 10,
        height: 60,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: "white",
      },
    },
  }
);

const navigator = createSwitchNavigator({
  Flash: SplashScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: BottomTab,
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <ExpenseProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </ExpenseProvider>
  );
};
