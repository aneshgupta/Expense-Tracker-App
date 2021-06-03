import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, Card, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import { Context as ExpenseContext } from "../context/expenseContext";

const ACTIVE_TAB_COLOR = "navy";
const INACTIVE_TAB_COLOR = "#aaa";

const ProfileScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const { state, resetAll } = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <Card containerStyle={{ paddingHorizontal: 0 }}>
        <Card.Title h3>Expense Tracker</Card.Title>
        <Card.Image
          source={require("../../assets/expense_logo.png")}
          style={{ height: 190 }}
        ></Card.Image>
        <Text style={styles.text}>
          This app is an attempt to manage our daily expenses in a more
          efficient and manageable way.
        </Text>
      </Card>
      <Card>
        <Card.Title h3>Profile</Card.Title>
        <Card.Divider />
        <Text h4>Welcome, {state.name}</Text>
        <Button
          title="Sign Out"
          containerStyle={{ marginTop: 75 }}
          onPress={() => {
            resetAll();
            signout();
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "stretch",
    marginTop: 3,
    padding: 5,
  },
});

ProfileScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="person"
      focused={focused}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
      size={22}
    />
  ),
};

export default ProfileScreen;
