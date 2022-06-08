import React, { useEffect } from 'react'
import {Autocomplete , Icon , TextField , InputAdornment , Typography , Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from  './Style';

function AutoCompleteInput({options,label,placeholder,size,required,texthelper, value, onChange}) {


  const [isIcon, setIcon] = React.useState(true);
  const [valueData, setValue] = React.useState('');



  const handleChange = (event, obj) => {
    if(obj===null){
      onChange(null);
      setValue('');
    }else{
      onChange(obj);
      setValue(obj);
    }
  
   
  }


  useEffect(() => {
    if(!valueData){
      setIcon(true);
    }else{
      setIcon(false);
    }

  },[valueData])




  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={{marginBottom:'20px'}}>
        <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
            <Typography variant="p">{label}</Typography>
            {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
        </Box>
        <Autocomplete
            size={size}
            id="g-form-input"
            onChange={handleChange}
            freeSolo 
            options={options}
            getOptionLabel={option => option.label}
            loading={true}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }} {...props}>        
                {option.icon?
                      (typeof option.icon === 'string'?
                      <img
                        loading="lazy"
                        width="16"
                        height="16"
                        src={option.icon}
                        alt={option.label}
                      />:
                        option.icon.map((icon,i)=>(
                        <img
                        key={i}
                        loading="lazy"
                        width="16"
                        height="16"
                        src={icon}
                        alt={option.label}
                        className={i>0?"icon_second":"icon_first"}
                       />
                      ))
                      )
                :''}
                {option.label }
              </Box>
            )}
            renderInput={(params) =>  <TextField {...params} label="" 
            placeholder={placeholder} 
            InputProps={{ ...params.InputProps, 
            startAdornment: isIcon ?(<InputAdornment position="start"> <Icon>search</Icon>
            </InputAdornment> ): 
              (valueData.icon?
                (typeof valueData.icon === 'string'?
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={valueData.icon}
                      alt={valueData.label}
                    />:
                    valueData.icon.map((icon,i)=>(
                      <img
                      key={i}
                      loading="lazy"
                      width="16"
                      height="16"
                      src={icon}
                      alt={valueData.label}
                      className={i>0?"icon_second":"icon_first"}
                     />
                    ))
                    ):'') 
             ,
            }} 
            />
          }
        />
        <Typography variant="span" className="texthelper">{texthelper}</Typography>
      </Box>
    </ThemeProvider>
  )
}

export default AutoCompleteInput