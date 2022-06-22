import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    p: {
      fontSize: 16,
      fontFamily: '"Roboto"',
      color: "#0B0D17",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "150%",
    },
    span: {
      fontFamily: '"Roboto"',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#898989",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: "4px",
          border: "1px solid #DCDCDC",
          borderRadius: 5,
          background: "#F4F5F7",
          padding: "0px 10px 0px 10px!important",
          "& > img": {
            border: "1px solid #DCDCDC",
            padding: "4px",
            borderRadius: "5px",
            background: "#FFFFFF",
          },
          "& .icon_second": {
            marginLeft: "-5px",
          },
          "& .icon_first": {
            zIndex: "1",
          },
        },
        notchedOutline: {
          border: 0,
        },
        input: {
          padding: "15px 70px 15px 15px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: "1px solid #DCDCDC",
          paddingTop: "0px!important",
          background: "#F4F5F7!important",
          "& img": {
            marginRight: "0px",
          },
          "& li": {
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: "4px",
            borderRadius: "4px",
            border: "1px solid #DCDCDC",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            overflow: "hidden",
            whiteSpace: "normal",
            textOverflow: "ellipsis",
            "& > img": {
              border: 0,
            },
          },
          "& .icon_second": {
            marginLeft: "-4px",
            backgroundColor: "#FFFFFF",
          },
          "& .icon_first": {
            marginRight: "0px",
            backgroundColor: "#FFFFFF",
          },
          "&:hover:not(.Mui-disabled):before": {
            border: 0,
          },
          "&:hover": {
            background: "#F4F5F7!important",
          },
          "&:after": {
            border: 0,
          },

          "&:before": {
            border: 0,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-sizeSmall": {
            width: "240px",
          },
          "& > div > .Mui-focused": {
            boxShadow: "inset 0px 0px 0px 1px #8C30F5",
            border: "1px solid #8C30F5",
          },
          position: "relative",
          "& .paid-label": {
            position: "absolute",
            top: "25px",
            right: "50px",
            backgroundColor: "#FF5858",
            borderRadius: "2px",
          },
          "& .paid-label span": {
            padding: "2px 6px",
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "8px",
            margin: "0px",
            display: "flex",
          },
        },
        option: {
          fontSize: "16px",
          color: "#0B0D17",
          textOverflow: "ellipsis",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "#FDFBFF",
          },
          "& .icon_second": {
            marginLeft: "-5px",
            backgroundColor: "#FFFFFF",
          },
          "& .icon_first": {
            zIndex: "1",
            backgroundColor: "#FFFFFF",
          },
          "& img": {
            backgroundColor: "#FFFFFF",
          },
          "& h5": {
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#141416",
            margin: "0px",
          },
          "& span": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#898989",
            margin: "0px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "260px",
          },
          "& .full_img_box": {
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            border: "1px solid #DCDCDC",
            padding: "4px",
            borderRadius: "5px",
            background: "#fff",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          },
          "& .paid-label": {
            backgroundColor: "#FF5858",
            borderRadius: "2px",
            right: "15px",
            margin: "0px",
            display: "flex",
            marginLeft: "auto",
          },
          "& .paid-label span": {
            padding: "2px 6px",
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "8px",
            margin: "0px",
            overflow: "inherit",
            whiteSpace: "inherit",
            width: "inherit",
          },
        },
        input: {
          padding: "15px 70px 15px 5px!important",
        },
        endAdornment: {
          "& > button": {
            visibility: "visible",
            background: "#898989",
            padding: "2px",
            marginRight: "10px",
            "& > svg": {
              fill: "#fff",
              fontSize: "16px",
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#000",
          width: "160px",
          padding: "10px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "150%",
        },
        arrow: {
          color: "#000",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: "0px",
          marginRight: "0px",
          width: "24px",
          height: "24px",
          "& > img": {
            border: "1px solid #DCDCDC",
            padding: "4px",
            borderRadius: "5px",
            marginLeft: "-5px",
            background: "#FFFFFF",
          },
        },
      },
    },

    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: "24px",
        },
      },
    },
    Mui: {
      focused: {
        "& .MuiFilledInput-root": {
          boxShadow: "inset 0px 0px 0px 1px #8C30F5",
        },
      },
    },
  },
});
