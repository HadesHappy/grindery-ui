import React from 'react'
import { Typography, TextField , Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'


function InputBox({placeholder,size,onChange,value,label,required,texthelper,type}) {
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={{marginBottom:'20px'}}>
          <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
            <Typography variant="p">{label}</Typography>
            {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
          </Box>  
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
        <Typography variant="span" className="texthelper">{texthelper}</Typography>
      </Box>
    </ThemeProvider>
  )
}


InputBox.propTypes = {

    placeholder: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string
}

InputBox.defaultProps = {
  placeholder:'0x...',
  size:'large',
  onChange: undefined,
  value: '',
  type: 'text',
  label: '',
}

export default InputBox