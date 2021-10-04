import { ColorPropType, StyleSheet } from "react-native";

const colors = {
  yellow: "#FFC700",
  buttonImageContainer: "rgba(38, 50, 56, 0.5)",
  darkGray: "#525252",
  mediumGray: "#6C6C6C",
  lightGray: "#9E9E9E",
  subtitle: "#F2F2F2",
  black: "#000",
  white: "#FFF",
  whiteBorder: "#E1E1E1",
  placeholder: "#BFBFBF",
  whiteBackground: "#FEFEFE",
  subtitleLight: "#CDCDCD",
  subtitleDark: "#9E9E9E",
};

const text = StyleSheet.create({
  regular: { fontSize: 400 },
  bold: {},

  title: {
    fontSize: 26,
    lineHeight: 35,
    letterSpacing: -0.015,
    color: colors.white,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 26,
    lineHeight: 35,
    letterSpacing: -0.015,
    color: colors.white,
    textAlign: "center",
    marginTop: 40,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 50,
    textTransform: "uppercase",
    color: colors.white,
  },

  //login
  LoginTitle: {
    fontSize: 30,
    letterSpacing: -0.015,
    color: colors.white,
    paddingTop: 50,
    paddingBottom: 40,
  },

input: {
    width: "100%",
    maxWidth: 290,
    maxHeight: 10,
    backgroundColor: colors.whiteBackground,
    borderWidth: 1,
    borderColor: colors.whiteBorder,
    borderRadius: 10,
    padding: 30,
    marginBottom: 50,
  },

  buttonLoginText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 50,
    textTransform: "uppercase",
    color: colors.black
  }
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    padding: 20,
  },

  card: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.mediumGray,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
  },

  mainImage: {
    width: 313,
    height: 225,
  },

  primaryButton: {
    width: 290,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  eyesContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.darkGray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  //Login

  loginContainer: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: colors.lightGray,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  cardLogin: {
    width: "110%",
    height: "100%",
    backgroundColor: colors.mediumGray,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
  },

});

export { colors, theme, text };
