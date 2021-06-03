import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import StatsScreen from "../screens/StatsScreen";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Expense: AddExpenseScreen,
    Income: StatsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "red",
      },
    },
  }
);

// const TopTab = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Expense" component={AddExpenseScreen} />
//         <Tab.Screen name="Income" component={StatsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

export default createAppContainer(TabNavigator);
