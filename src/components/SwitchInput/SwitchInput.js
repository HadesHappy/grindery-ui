import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, Switch } from "@mui/material";
import { theme } from "./Style";

function SwitchInput({ value, color, on, off, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      {on ? (
        <Switch
          checked={value}
          onChange={onChange}
          sx={{
            ".MuiSwitch-thumb": { background: color },
            ".MuiSwitch-track": { borderColor: color },
            ".MuiSwitch-track:after": {
              content: '"On"',
              left: "6px",
              position: "absolute",
              fontFamily: '"Roboto"',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              top: "4px",
              lineHeight: "150%",
              textAlign: "right",
              color: "#0B0D17",
            },
            ".MuiSwitch-track:before": {
              content: '"Off"',
              right: "6px",
              top: "4px",
              position: "absolute",
              fontFamily: '"Roboto"',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "150%",
              textAlign: "right",
              color: "#0B0D17",
            },
          }}
          name="check"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ) : (
        <Switch
          checked={value}
          onChange={onChange}
          sx={{
            ".MuiSwitch-thumb": { background: color },
            ".MuiSwitch-track": { borderColor: color },
          }}
          name="check"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      )}
    </ThemeProvider>
  );
}

SwitchInput.propTypes = {
  value: PropTypes.bool,
  color: PropTypes.string,
  on: PropTypes.string,
  off: PropTypes.string,
  onChange: PropTypes.func,
};

SwitchInput.defaultProps = {
  value: false,
  color: "primary",
  onChange: undefined,
};

export default SwitchInput;
