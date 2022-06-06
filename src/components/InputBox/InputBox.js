import React from 'react'
import { Typography, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'


function InputBox({placeholder,size,onChange,value,type}) {
  return (
    <ThemeProvider theme={theme}>
            <Typography variant="p">DAO address</Typography>
            {type==='text'?   
            <TextField fullWidth placeholder={placeholder} size={size} onChange={onChange} value={value} />
            :
            <TextField
            placeholder={placeholder}
            size={size}
            onChange={onChange}
            value={value}
            multiline
            rows={3}
            maxRows={4}
            />
        }
    </ThemeProvider>
  )
}


InputBox.propTypes = {

    placeholder: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string
}

InputBox.defaultProps = {
  placeholder:'0x...',
  size:'large',
  onChange: undefined,
  value: '',
  type: 'text'
}

export default InputBox