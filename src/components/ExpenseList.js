import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView
} from "react-native";
import { Divider } from "react-native-elements";
import ExpenseTile from "./ExpesneTile";

const ExpenseList = (props) => {
  const filterResultsByDate = () => {
    return props.expenses.filter((expense) => {
      return (
        new Date(expense.updatedAt.seconds * 1000).toLocaleDateString() ===
        new Date().toLocaleDateString()
      );
    });
  };

  const data = filterResultsByDate();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today Expenses</Text>
      <Divider style={{ marginHorizontal: 5 }} />
      <ScrollView showsVerticalScrollIndicator={true} >
        {data.length > 0 ? (
          data.map((data) => {
            return <ExpenseTile title={data.title} category={data.category} amount={data.amount} />;
          })
        ) : (
          <Image
            source={require("../../assets/nothing.png")}
            style={styles.image}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 350,
    borderWidth: 0
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#aaa",
    marginBottom: 5,
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
});

export default ExpenseList;
