import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { text, theme } from "../styles";

const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(true);

  function logout() {
    setAuthenticated(false);
    navigation.navigate("Login");
  }

  return (
    <>
      {authenticated && (
        <TouchableOpacity onPress={() => logout()} style={theme.navBtnLogout}>
          <Text style={text.navLogoutText}>Sair</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default NavBar;
