import React , {Fragment} from 'react'
import {Autocomplete , Icon , TextField , InputAdornment , Typography , IconButton} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style'
import DeleteIcon from '@mui/icons-material/Delete';

function Select({options,label,placeholder}) {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant="p">{label}</Typography>
        <Autocomplete
            id="g-form-input"
            freeSolo    
            options={options}
            loading={true}
            renderInput={(params) => <TextField {...params} label="" 
            placeholder={placeholder} 
            InputProps={{ ...params.InputProps, 
            startAdornment: ( <InputAdornment position="start"> <Icon>search</Icon>
            </InputAdornment> )}}
            />}
        />
    </ThemeProvider>
  )
}

export default Select