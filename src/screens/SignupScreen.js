import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { state, signup, clearErrorMsg } = useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NavigationEvents onWillFocus={clearErrorMsg} />
      <View style={styles.container}>
        <Image
          source={require("../../assets/expense_logo.png")}
          style={styles.logo}
        />
        <Text h2>Sign Up</Text>
        <Spacer />
        <Input
          style={styles.input}
          label="Your Name"
          placeholder="Abc"
          leftIcon={{ type: "Ionicons", name: "person" }}
          autoCorrect={false}
          autoCapitalize="words"
          value={name}
          onChangeText={(term) => setName(term)}
        />
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
        {/* <Input
          style={styles.input}
          label="Your Mobile No"
          placeholder="xxxxxxxxxx"
          leftIcon={{ type: "FontAwesome5", name: "phone" }}
          keyboardType="number-pad"
          maxLength={10}
          value={number}
          onChangeText={(term) => setNumber(term)}
        /> */}
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
          title="Sign Up"
          onPress={() => signup({ email, password, name, number })}
          loading={state.loading}
          raised
        />
        <Spacer />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={styles.link}>Already an user? Login</Text>
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
    marginBottom: 28,
  },
  input: {
    // color: "#758283",
  },
  link: {
    color: "blue",
  },
  logo: {
    height: 265,
  },
  error: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: "red",
    fontWeight: "bold",
  },
});

SignupScreen.navigationOptions = {
  headerShown: false,
};

export default SignupScreen;
