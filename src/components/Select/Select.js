import React from 'react'
import {Autocomplete , Icon , TextField , InputAdornment , Typography , Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style'

function Select({options,label,placeholder,size='small',onChange}) {


  const [isIcon, setIcon] = React.useState(true);
  const [value, setValue] = React.useState('');



  const handleChange = (event, value) => {
    onChange(event, value);
    if(!value){
      setIcon(true);
    }else{
      setIcon(false);
      setValue(value);
    }
  }

  return (
    <ThemeProvider theme={theme}>
        <Typography variant="p">{label}</Typography>
        <Autocomplete
            size={size}
            id="g-form-input"
            onChange={handleChange}
            freeSolo    
            options={options}
            getOptionLabel={option => option.value}
            loading={true}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }} {...props}>
                <img
                  loading="lazy"
                  width="16"
                  height="16"
                  src={option.icon}
                  alt={option.value}
                />
                {option.value }
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="" 
            placeholder={placeholder} 
            InputProps={{ ...params.InputProps, 
            startAdornment: isIcon ?(<InputAdornment position="start"> <Icon>search</Icon>
            </InputAdornment> ): (<InputAdornment position="start"> 
                <img
                  loading="lazy"
                  width="16"
                  height="16"
                  src={value.icon}
                  alt={value.value}
                />
            </InputAdornment> ) ,
            }}
            />}
        />
    </ThemeProvider>
  )
}

export default Select