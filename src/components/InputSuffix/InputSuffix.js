import React from 'react'
import { TextField , InputAdornment } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'


function InputSuffix({value,placeholder,suffix,onChange}) {
  return (
    <ThemeProvider theme={theme}>
        
        <TextField
        id="input-with-suffix"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                {suffix}
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  )
}


InputSuffix.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}


export default InputSuffix