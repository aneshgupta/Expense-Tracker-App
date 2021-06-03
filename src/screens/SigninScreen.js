import React, { useState, useContext, useCallback } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin, clearErrorMsg } = useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NavigationEvents onWillFocus={clearErrorMsg} />
      <View style={styles.container}>
        <Image
          source={require("../../assets/expense_logo.png")}
          style={styles.logo}
        />
        <Text h2>Sign In</Text>
        <Spacer />
        <Input
          style={styles.input}
          label="Your Email Address"
          placeholder="email@address.com"
          leftIcon={{ type: "MaterialIcons", name: "email" }}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(term) => setEmail(term)}
        />
        <Input
          style={styles.input}
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "lock" }}
          value={password}
          onChangeText={(term) => setPassword(term)}
        />
        <Text style={styles.error}>{state.errorMsg}</Text>
        <Button
          title="Sign In"
          style={styles.button}
          onPress={() => signin({ email, password })}
          loading={state.loading}
          raised
        />
        <Spacer />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.link}>New User? Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  link: {
    color: "blue",
  },
  logo: {
    height: 350,
  },
  error: {
    marginVertical: 5,
    marginHorizontal: 10,
    color: "red",
    fontWeight: "bold",
  },
});

SigninScreen.navigationOptions = {
  headerShown: false,
};

export default SigninScreen;
