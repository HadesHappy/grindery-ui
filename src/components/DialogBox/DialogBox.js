import React from 'react'
import { Dialog } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'

function DialogBox({open , onClose , ...props}) {

  
  
    return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={onClose} open={open}>
        {props.children}
      </Dialog>
      </ThemeProvider>
    );
}
  
DialogBox.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default DialogBox