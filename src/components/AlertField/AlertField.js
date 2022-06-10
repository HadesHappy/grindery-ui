import React from 'react'
import { Alert } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'

function AlertField({color,text,icon}) {
  return (
    <ThemeProvider theme={theme}>
        <Alert icon={icon} severity={color}>{text}</Alert>
    </ThemeProvider>
  )
}


AlertField.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default AlertField