import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { doLogout, isAuthenticated } from "../services/auth";
import { text, theme } from "../styles";

const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(false);

  
  async function logged() {
    const result = await isAuthenticated();

    result ? setAuthenticated(true) : setAuthenticated(false);
}

useEffect(() => {
    logged();
}, [logged])

  function logout() {
    doLogout();
    navigation.navigate("Home");
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
