import React, { useState, useContext } from "react";
import { StyleSheet, View, Picker } from "react-native";
import { Text, Card, Input, Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Context as ExpenseContext } from "../context/expenseContext";

const AddExpenseScreen = () => {
  const [selectedValue, setSelected] = useState("Food & Drinks");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { state, addExpense } = useContext(ExpenseContext);

  const clearAll = () => {
    setTitle("");
    setAmount("");
    setSelected("Food & Drinks");
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearAll} />
      <Card
        containerStyle={{
          borderRadius: 8,
          width: 285,
          backgroundColor: "orange",
        }}
      >
        <Card.Title h2 style={{ color: "black" }}>
          New Expense
        </Card.Title>
        <Text h4 h4Style={{ color: "white" }}>
          Enter Title
        </Text>
        <Input
          placeholder="Shop Name"
          autoCorrect={false}
          value={title}
          onChangeText={(term) => {
            setTitle(term);
          }}
        />
        <Text h4 h4Style={{ color: "white" }}>
          Choose a Category
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelected(itemValue)}
          style={{}}
          mode="dropdown"
        >
          <Picker.Item label="Food & Drinks" value="Food & Drinks" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Groceries" value="Groceries" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Clothings" value="Clothings" />
        </Picker>
        {/* <Input label="Choose a Category" placeholder="Food & Drinks" /> */}
        <Text h4 h4Style={{ color: "white" }}>
          Enter Amount
        </Text>
        <Input
          placeholder="0"
          leftIcon={<FontAwesome5 name="rupee-sign" size={18} />}
          keyboardType="number-pad"
          value={amount}
          onChangeText={(term) => {
            setAmount(term);
          }}
        />
        {state.errorMsg ? (
          <Text style={styles.error}>{state.errorMsg}</Text>
        ) : null}
        <Button
          title="Add Expense"
          buttonStyle={{ width: 110, marginLeft: 65, color: "orange" }}
          onPress={() => {
            addExpense(title, selectedValue, amount);
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    alignSelf: "center",
    marginHorizontal: 0,
    marginVertical: 0,
    marginBottom: 5,
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});

AddExpenseScreen.navigationOptions = {
  title: "",
  tabBarIcon: (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        shadowColor: "#aaa",
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1 },
      }}
    >
      <AntDesign name="pluscircle" size={48} color="orange" />
    </View>
  ),
};

export default AddExpenseScreen;
