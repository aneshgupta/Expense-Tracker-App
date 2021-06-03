import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Context as ExpenseContext } from "../context/expenseContext";
import { NavigationEvents } from "react-navigation";
import Name from "../components/Name";
import Card from "../components/Card";
import ExpenseList from "../components/ExpenseList";

const ACTIVE_TAB_COLOR = "navy";
const INACTIVE_TAB_COLOR = "#aaa";

const DiscoverScreen = () => {
  const { state, getExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <View>
        <NavigationEvents onWillFocus={getExpenses} />
        <Name name={state.name} />
        <Card income={state.totalExp} />
        <ExpenseList expenses={state.expenses} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

DiscoverScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="compass"
      focused={focused}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
      size={25}
    />
  ),
};

export default DiscoverScreen;
