import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";
import Food from "../../assets/Food.png";
import Travel from "../../assets/Travel.jpg";
import Clothings from "../../assets/Clothings.png";
import Groceries from "../../assets/Groceries.png";
import Entertainment from "../../assets/Entertainment.png";

const ExpenseTile = (props) => {
  const getUri = () => {
    switch (props.category) {
      case "Food & Drinks":
        return Food;
      case "Clothings":
        return Clothings;
      case "Travel":
        return Travel;
      case "Groceries":
        return Groceries;
      case "Entertainment":
        return Entertainment;
    }
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Avatar rounded source={getUri()} size={55} />
        </View>
        <View style={styles.nameView}>
          <Text h4 h4Style={{ color: "navy" }}>
            {props.title}
          </Text>
          <Text style={{ color: "#aaa" }}>{props.category}</Text>
        </View>
        <View style={styles.expenseView}>
          <Text h4 h4Style={{ color: "crimson" }}>
            -₹{props.amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 65,
    borderWidth: 0,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "gray",
  },
  nameView: {
    marginLeft: 5,
    width: 200,
  },
  expenseView: {
    justifyContent: "center",
    marginLeft: 2,
  },
});

export default ExpenseTile;
