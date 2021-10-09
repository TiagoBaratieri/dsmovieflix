import { StyleSheet, Dimensions } from "react-native";

const colors = {
  primary: "#FFC700",
  darkGray: "#525252",
  mediumGray: "#6C6C6C",
  lightGray: "#9E9E9E",
  secondary: "rgba(38, 50, 56, 0.5)",
  black: "#000",
  white: "#fff",
};

const text = StyleSheet.create({
  homeTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.white,
    lineHeight: 35,
    letterSpacing: -0.015,
  },

  homeSubTitle: {
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

  //Navbar

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

  //MovieCard

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

  loginErrorText: {
    color: colors.primary,
    fontSize: 20,
  },

  //MovieDetails

  formButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  detailsDescription: {
    fontSize: 16,
    color: colors.lightGray,
  },

  reviewName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
  reviewText: {
    fontSize: 16,
    color: colors.lightGray,
  },
});

const theme = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: colors.darkGray,
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
    shadowColor: colors.darkGray,
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
    backgroundColor: colors.lightGray,
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
    paddingLeft: 20,
  },

  form: {
    marginVertical: 10,
  },

  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  toggle: {
    marginLeft: -40,
    marginTop: -15,
  },

  LoginButton: {
    width: 290,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  loginError: {
    marginBottom: 20,
  },

  // Navbar
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

  //Movie Card
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

  //Catalog

  scrollContainer: {
    backgroundColor: colors.darkGray,
    padding: 10,
  },

  //Pagination
  paginationContainer: {
    margin: 25,
  },
  paginationCoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paginationItem: {
    width: 40,
    height: 40,
    backgroundColor: colors.mediumGray,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  //Details page
  detailsContainer: {
    backgroundColor: colors.darkGray,
  },
  detailsCard: {
    backgroundColor: colors.mediumGray,
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  detailsImage: {
    width: "100%",
    height: 170,
  },
  detailsContent: {
    marginTop: 15,
  },
  descriptionContainer: {
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  formContainer: {
    backgroundColor: colors.mediumGray,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  formInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 20,
    paddingLeft: 20,
  },
  formButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewsContainer: {
    backgroundColor: colors.mediumGray,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  reviewContainer: {
    marginBottom: 15,
  },
  reviewNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewImage: {
    marginRight: 15,
  },
  reviewContent: {
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },

  //Search
  modalContainer: {
    width: "100%",
    height: 60,
    backgroundColor: colors.mediumGray,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  modalContent: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    width: "100%",
    backgroundColor: colors.lightGray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  searchSelect: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export { colors, theme, text };
