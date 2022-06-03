import React from 'react'
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';

function ButtonElement ({variant,value,size,color,icon, disabled=false, onClick}) {
  return (
      <ThemeProvider theme={theme}>
        {icon?  
            <Button variant={variant} size={size} color={color} disabled={disabled} onClick={onClick}
              startIcon={
                <img src={'./assets/img/google.png'} alt={value} />
              } 
            >{value}</Button>
        :<Button variant={variant} size={size} color={color} disabled={disabled} onClick={onClick}>{value}</Button>}
      </ThemeProvider>
  )
}

export default ButtonElement