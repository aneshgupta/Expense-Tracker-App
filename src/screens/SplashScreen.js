import React, { useContext, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";

const FlashScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/expense_logo.png")}
        style={styles.logo}
      />
      <Text h2 h2Style={{ margin: 10 }}>
        Expense Tracker
      </Text>
      <Spacer />
      <ActivityIndicator size="large" color="#F7CD2E" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 75,
  },
  logo: {
    height: 125,
    width: 125,
  },
});

export default FlashScreen;
