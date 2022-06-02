import React from 'react'
import { Typography  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';

function Text({variant,value}) {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant={variant}>
            {value}
        </Typography>
    </ThemeProvider>
  )
}

export default Text