import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const Name = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.hello}>Hello,</Text>
        <Text h1Style={{ color: "navy" }} h1>
          {props.name.split(" ")[0]}
        </Text>
      </View>
      <TouchableOpacity>
        <Feather style={styles.icon} name="search" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  hello: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#aaa",
  },
  name: {
    fontWeight: "bold",
    fontSize: 35,
    color: "navy",
  },
  icon: {
    marginLeft: 0,
  },
  nameContainer: {
    width: 275,
  },
});

export default Name;
