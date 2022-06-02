import React from 'react'
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';

function ButtonElement ({variant,value,size,color,icon=false, disabled=false}) {
  return (
      <ThemeProvider theme={theme}>
        {icon?  
            <Button variant={variant} size={size} color={color} disabled={disabled}>{value}</Button>
        :<Button variant={variant} size={size} color={color} disabled={disabled}>{value}</Button>}
      </ThemeProvider>
  )
}

export default ButtonElement