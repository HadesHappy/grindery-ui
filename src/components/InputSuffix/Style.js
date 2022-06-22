import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#F4F5F7",
          borderRadius: "5px",
          border: "1px solid #DCDCDC",
          "& fieldset": {
            border: "0px",
          },
          height: "34px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          alignItems: "center",
          color: "#0B0D17",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            alignItems: "center",
            color: "#898989",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "0px",
          padding: "5px 10px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "0px",
          },
          "& input": {
            padding: "0px",
          },
        },
      },
    },
  },
});
