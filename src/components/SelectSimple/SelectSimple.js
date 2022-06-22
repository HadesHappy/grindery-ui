import React from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Style";
import PropTypes from "prop-types";

function SelectSimple({ value, options, placeholder, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        {value === "" ? (
          <InputLabel id="simple-select-label" shrink={false}>
            {placeholder}
          </InputLabel>
        ) : (
          ""
        )}
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          className={value === "" ? "" : "select-simple-value"}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

SelectSimple.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectSimple;
