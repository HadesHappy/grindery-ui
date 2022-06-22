import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "0px",
          },
          "& > div": {
            paddingTop: "5px",
            paddingBottom: "5px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#0B0D17",
          },
          "& > .MuiSvgIcon-root": {
            fill: "#898989",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& > label": {
            color: "#898989!important",
            left: "-5px",
            top: "-10px",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "& > li": {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#141416",
          },
          "& > li:hover": {
            background: "#FDFBFF",
          },
          "& > .Mui-selected": {
            background: "#FDFBFF",
          },
          "& > .Mui-selected:hover": {
            background: "#FDFBFF",
          },
        },
      },
    },
  },
});
