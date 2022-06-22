import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#8C30F5",
  },
  secondary: {
    main: "#0B0D17",
  },
};

export const theme = createTheme({
  palette: palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          padding: "10px 20px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 16,
          lineHeight: "150%",
          textAlign: "center",
          textTransform: "none",
          color: "#FFFFFF",
          boxShadow: "initial",
          margin: "10px 0px",
          "& span": {
            marginRight: "10px",
            "& img": {
              padding: "4px",
              backgroundColor: "#FFFFFF",
              borderRadius: 5,
              border: "1px solid #DCDCDC",
            },
          },
          "&:hover": {
            opacity: 0.7,
          },
        },
        containedPrimary: {
          "&:disabled": {
            opacity: 0.4,
            backgroundColor: palette.primary.main,
            color: "#FFFFFF",
          },
        },
        containedSecondary: {
          "&:disabled": {
            opacity: 0.4,
            backgroundColor: palette.secondary.main,
            color: "#FFFFFF",
          },
        },
        sizeSmall: {
          width: 167,
        },
        sizeLarge: {
          width: "100%",
        },
        outlinedPrimary: {
          color: "#8C30F5",
          border: "1px solid #8C30F5",
        },
        outlinedSecondary: {
          color: "#0B0D17",
          border: "1px solid #0B0D17",
        },
      },
    },
  },
});
