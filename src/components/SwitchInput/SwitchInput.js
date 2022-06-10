import React from "react";
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  Switch
} from "@mui/material";
import {theme} from './Style';

function SwitchInput({value,color,on,off,onChange}) {
  return (
    <ThemeProvider theme={theme}>
        <Switch
        checked={value}
        onChange={onChange}
        color={color}
        name="check"
        inputProps={{ "aria-label": "secondary checkbox" }}
        />
    
    </ThemeProvider>
  )
}

SwitchInput.propTypes = {

    value: PropTypes.bool,
    color: PropTypes.string,
    on: PropTypes.string,
    off: PropTypes.string,
    onChange: PropTypes.func

}

SwitchInput.defaultProps = {

    value: false,
    color: 'primary',
    on: 'On',
    off: 'Off',
    onChange: undefined
}

export default SwitchInput