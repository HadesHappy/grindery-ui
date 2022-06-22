import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

function ButtonElement({
  variant,
  value,
  size,
  color,
  icon,
  disabled,
  type,
  loading,
  onClick,
}) {
  return (
    <ThemeProvider theme={theme}>
      {icon ? (
        <Button
          variant={variant}
          size={size}
          color={color}
          type={type}
          disabled={disabled}
          onClick={onClick}
          startIcon={
            loading ? (
              <CircularProgress sx={{ color: "#FFF" }} size={14} />
            ) : (
              <img src={icon} height={16} width={16} alt={value} />
            )
          }
        >
          {value}
        </Button>
      ) : (
        <Button
          variant={variant}
          size={size}
          color={color}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {value}
        </Button>
      )}
    </ThemeProvider>
  );
}

ButtonElement.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

ButtonElement.defaultProps = {
  variant: "contained",
  value: "Continue",
  size: "large",
  color: "secondary",
  icon: "",
  disabled: false,
  onClick: undefined,
  type: "button",
};

export default ButtonElement;
