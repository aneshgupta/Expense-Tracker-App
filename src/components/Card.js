import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/card_back.png")}
        style={styles.image}
      >
        <Text h3Style={styles.income} h3>
          My Expenses
        </Text>
        <View style={styles.inside}>
          <FontAwesome5 name="rupee-sign" size={22} color="white" />
          <Text h1Style={styles.amount} h1>
            {props.income}
          </Text>
        </View>
        <Text h4 h4Style={styles.number}>
          {"XXXX  XXXX  XXXX  XXXX"}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 0,
    height: 240,
    borderRadius: 0,
    padding: 0,
    marginLeft: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    padding: 20,
    marginLeft: 5,
  },
  income: {
    color: "white",
  },
  amount: {
    color: "white",
    marginLeft: 5,
  },
  inside: {
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    color: "white",
    marginTop: 42,
    marginLeft: 10,
  },
});

export default Card;
