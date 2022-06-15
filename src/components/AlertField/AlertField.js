import React from 'react'
import { Alert } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'

function AlertField({color,icon,...props}) {
  return (
    <ThemeProvider theme={theme}>
        <Alert icon={icon} severity={color}>{props.children}</Alert>
    </ThemeProvider>
  )
}


AlertField.propTypes = {
    color: PropTypes.string.isRequired,
}

export default AlertField