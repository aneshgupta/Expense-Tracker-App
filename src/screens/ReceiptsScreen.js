import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView, FlatList, Image } from "react-native";
import { Text, Divider } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Context as ExpenseContext } from "../context/expenseContext";
import ExpenseTile from "../components/ExpesneTile";

const ACTIVE_TAB_COLOR = "navy";
const INACTIVE_TAB_COLOR = "#aaa";

const ReceiptsScreen = () => {
  const { state, getExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={getExpenses} />
      <Text
        h2
        h2Style={{ color: "navy", alignSelf: "center", marginBottom: 5 }}
      >
        All Expenses
      </Text>
      {state.expenses ? (
        <FlatList
          data={state.expenses}
          keyExtractor={(expense, index = 0) => index++}
          renderItem={({ item }) => {
            return (
              <View>
                {/* <Text style={{ color: "gray", fontSize: 15, margin: 5 }}>
                  {new Date(item.updatedAt.seconds * 1000).toDateString()}
                </Text>
                <Divider style={{ marginHorizontal: 5 }} /> */}
                <ExpenseTile
                  title={item.title}
                  category={item.category}
                  amount={item.amount}
                />
              </View>
            );
          }}
        />
      ) : (
        <Image
          source={require("../../assets/nothing.png")}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderWidth: 0,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    marginTop: 125,
  },
});

ReceiptsScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="receipt"
      focused={focused}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
      size={22}
    />
  ),
};

export default ReceiptsScreen;
