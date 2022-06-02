import React from 'react'
import { Paper} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';


function PaperBox(props) {
  return (
    <ThemeProvider theme={theme}>
        <Paper  variant="outlined" square>
          {props.children}
        </Paper>
    </ThemeProvider>
  )
}

export default PaperBox