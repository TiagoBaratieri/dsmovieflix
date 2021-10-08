import { StyleSheet, Dimensions } from "react-native";

const colors = {
  white: "#fff",
  lightestGray: "#fefefe",
  lightGray: "#f2f2f2",
  borderGray: "#e1e1e1",
  lighterGray: "#cdcdcd",
  lighterMediumGray: "#9e9e9e",
  lightMediumGray: "#6c6c6c",
  mediumGray: "#525252",
  darkGray: "#263238",
  black: "#000",
  primary: "#FFC700",
  secondary: "rgba(38, 50, 56, 0.5)",
  bluePill: "#407bff61",
  red: "#df5753",
};

const text = StyleSheet.create({
  bold: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.white,
    lineHeight: 35,
    letterSpacing: -0.015,
  },

  regular: {
    width: 240,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 50,
    color: colors.white,
    lineHeight: 22,
    letterSpacing: -0.015,
  },

  primaryText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
    textAlign: "center",
    color: colors.white,
    textTransform: "uppercase",
    letterSpacing: -0.015,
    marginLeft: 40,
  },

  //Login

  loginTitle: {
    fontSize: 35,
    fontWeight: "400",
    textTransform: "uppercase",
    color: colors.white,
    marginBottom: 50,
},

buttonText: {
  fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
    textAlign: "center",
    color: colors.black,
    textTransform: "uppercase",
    letterSpacing: -0.015,
    marginLeft: 40,
},

 
});

const theme = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: colors.lighterGray,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  card: {
    width: "100%",
    height: "95%",
    backgroundColor: colors.mediumGray,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: colors. lighterMediumGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  textContainer: {
    paddingHorizontal: 20,
  },

  MainImage: {
    width: 313,
    height: 225,
  },

  primaryButton: {
    width: 290,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  arrowContainer: {
    width: 40,
    height: 50,
    backgroundColor: colors.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

 //Login

 containerLogin: {
  flexGrow: 1,
  height: "100%",
  backgroundColor: colors.lightMediumGray,
  paddingHorizontal: 20,
  paddingTop: 20,
},

 loginCard: {
  width: "100%",
  height: "95%",
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

textInput: {
  width: 300,
  height: 50,
  borderWidth: 1,
  borderColor: colors.mediumGray,
  borderRadius: 5,
  backgroundColor: colors.white,
  marginBottom: 20,
  paddingLeft: 20
},

LoginButton: {
  width: 290,
  height: 50,
  backgroundColor: colors.primary,
  borderRadius: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 40
  
},


});

export { colors, theme, text };