import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const ACTIVE_TAB_COLOR = "navy";
const INACTIVE_TAB_COLOR = "#aaa";

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text h2>StatsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});

StatsScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="stats-chart"
      focused={focused}
      color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
      size={22}
    />
  ),
};

export default StatsScreen;
