import React from 'react'
import { Typography  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'

function Text({variant,value}) {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant={variant}>
            {value}
        </Typography>
    </ThemeProvider>
  )
}

Text.propTypes = {

    variant: PropTypes.string,
    value: PropTypes.string

}

Text.defaultProps = {

    variant: 'h3',
    value: 'Connecting...',

}

export default Text