import React from "react";
import { Catalog, Home, Login, MovieDetails } from "../pages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderText, NavBar } from "../components";
import { colors } from "../styles";

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: " ",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerLeft: () => <HeaderText />,
        headerRight: () => <NavBar />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
