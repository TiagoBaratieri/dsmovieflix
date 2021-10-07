import { StyleSheet, Dimensions } from 'react-native';

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
        marginBottom: 50,
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

});

    const theme = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: colors.mediumGray,
        },

        card: {
            width: "100%",
            height: "100%",
            backgroundColor: colors.lightMediumGray,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "space-around",
            shadowColor: colors.black,
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
    
});

    export { colors, theme, text};