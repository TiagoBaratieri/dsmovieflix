import React from "react";
import { Catalog, Home, Login } from "../pages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  );
};

export default Routes;
