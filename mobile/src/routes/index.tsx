import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Movies } from "../pages";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
};

export default Routes;
