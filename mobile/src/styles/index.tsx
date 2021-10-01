import { StyleSheet } from "react-native";

const colors = {
  primary: "#FFC700",
  darkGray: "#525252",
  mediumGray: "#6C6C6C",
  lightGray: "#9E9E9E",
  black: "#000",
  white: "#fff",
};

const text = StyleSheet.create({
  loginTitle: {
    fontSize: 35,
    fontWeight: "400",
    textTransform: "uppercase",
    color: colors.white,
    marginBottom: 50,
  },
  loginBtnText: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },

  loginErrorText: {
    color: colors.primary,
    fontSize: 20,
},

  navText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black,
    marginLeft: 20,
  },

  navLogoutText: {
    fontWeight: "bold",
    fontSize: 14,
},

movieTitle: {
  fontSize: 20,
  fontWeight: "bold",
  color: colors.white,
},
movieSubtitle: {
  fontSize: 14,
  color: colors.white,
  marginTop: 5,
},
movieYear: {
  fontSize: 16,
  fontWeight: "bold",
  color: colors.primary,
  marginTop: 5,
}
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.darkGray,
  },
  loginCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.mediumGray,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {},
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    width: 300,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },

  navBtnLogout: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
},

scrollContainer: {
  backgroundColor: colors.darkGray,
  padding: 10,
},

movieCard: {
  width: "100%",
  backgroundColor: colors.mediumGray,
  borderRadius: 5,
  shadowColor: colors.black,
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  paddingVertical: 25,
  marginTop: 20,
},
movieImage: {
  width: "100%",
  height: 170,
},
movieDescriptionContainer: {
  paddingTop: 10,
  paddingBottom: 20,
  paddingHorizontal: 15,
},

});

export { colors, text, theme };
