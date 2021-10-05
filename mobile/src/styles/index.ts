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

  primaryText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
    marginLeft: 20,
  },

  //login
  
  LoginTitle: {
    fontSize: 30,
    letterSpacing: -0.015,
    color: colors.white,
    paddingTop: 50,
    paddingBottom: 40,
  },

  //MovieCard

  cardTitle: {
    fontSize: 18,
    letterSpacing: -0.015,
    color: colors.white,
  },

  cardYear: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.015,
    color: colors.yellow,
  },

  cardSubTitle: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: colors.subtitleLight,
    marginVertical: 10,
  },

  buttonLoginText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 50,
    textTransform: "uppercase",
    color: colors.black,
  },
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
    paddingBottom: 20,
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

  arrowContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.mediumGray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
  loginCard: {
    width: "115%",
    height: "100%",
    backgroundColor: colors.darkGray,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginVertical: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  textInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
  },
  toggle: {
    marginLeft: -50,
  },

  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
  },

  //MovieCard

  cardMovie: {
    width: "100%",
    height: 370,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  cardDescription: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 1,
    height: "100%",
  },

  movieImage: {
    width: "100%",
    height: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },

  //catalog

  scrollContainer: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: colors.darkGray,
    padding: 10,
  },

  //Search

  inputContainer: {
    width: "100%",
    height: 80,
    backgroundColor: colors.mediumGray,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  SearchContainer: {
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.placeholder,
  },
});

export { colors, theme, text };
