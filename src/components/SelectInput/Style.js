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
  },
  "& .header-labels": {
    display: "flex",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #DCDCDC",
          borderRadius: 5,
          background: "#F4F5F7",
          padding: "0px!important",
          "& #search-select": {
            boxShadow: "inset 0px 0px 0px 1px #8C30F5",
            border: "1px solid #8C30F5",
          },
        },
        notchedOutline: {
          border: 0,
        },
        input: {
          padding: "15px 15px 15px 15px",
          display: "flex",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "4px",
          "& .Mui-focused": {
            "& #search-select": {
              boxShadow: "inset 0px 0px 0px 1px #8C30F5",
              border: "1px solid #8C30F5",
              padding: "10px 15px 10px 15px!important",
            },
            "& #search-select-empty": {
              boxShadow: "inset 0px 0px 0px 1px #8C30F5",
              border: "1px solid #8C30F5",
            },
          },
          "& #search-select": {
            padding: "10px 15px 10px 15px!important",
          },
          "& .texthelper ": {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            color: "#898989",
          },
          "& .boxItems": {
            display: "flex",
            flexWrap: "wrap",
            rowGap: "5px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "normal",
          },
          "& #search-input": {
            padding: "10px 5px 10px 10px",
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
            marginRight: "10px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          },

          "& .full_img_box img": {
            border: 0,
            marginRight: -5,
          },

          "& .img_box_icon": {
            display: "flex",
            alignItems: "center",
            marginRight: "5px",
            padding: "5px",
            "& .icon_second": {
              marginLeft: "-12px",
            },
          },
          "& .img_box_icon > img": {
            background: "#fff",
          },
          "& .img_box_icon > span": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "260px",
          },
          "& .img_box > img": {
            border: 0,
            padding: 0,
            borderRadius: 0,
            marginRight: 0,
          },
          "& .MuiSelect-select": {
            paddingLeft: "45px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "& .box-seleted-icon": {
            position: "absolute",
            left: "15px",
            top: "10px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #DCDCDC",
            padding: "5px",
            gap: "5px",
            borderRadius: "5px",
            background: "#FFFFFF",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: "15px",
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: "4px 0px",
          padding: "0px 15px 0px 15px",
          "&:hover": {
            backgroundColor: "#FDFBFF",
          },
          "& .icon_second": {
            marginLeft: "-17px",
            background: "#FFFFFF",
          },
          "& .icon_first": {
            zIndex: "1",
            background: "#FFFFFF",
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
          "& .img_box_icon img": {
            border: "1px solid #DCDCDC",
            padding: "5px",
            gap: "5px",
            borderRadius: "5px",
            background: "#FFFFFF",
          },
          "& .full_img_box .icon_second": {
            marginLeft: "0px",
          },
          "& .img_box_icon .icon_second": {
            marginLeft: "-10px",
          },
          "& .onlyImg": {
            border: 0,
            background: "initial",
          },
          "& .onlyImg img": {
            display: "flex",
            alignItems: "center",
            border: "1px solid #DCDCDC",
            padding: "5px",
            gap: "5px",
            borderRadius: "5px",
            background: "#FFFFFF",
          },
          "& > div": {
            display: "flex",
            alignItems: "center",
            padding: "5px",
            gap: "5px",
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
            width: "280px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        },
      },
    },
  },
});
