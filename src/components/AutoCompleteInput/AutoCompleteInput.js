import React, {useState , useMemo} from 'react'
import {Autocomplete , Icon , TextField , InputAdornment , Typography , ListSubheader, Paper, Box , Tooltip , Button} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types'
import {theme} from  './Style';
import SearchIcon from "@mui/icons-material/Search";

function AutoCompleteInput({options,label,placeholder, type, size,required,texthelper, variant, value, tooltip, onChange}) {


  const [open, setOpen] = useState(false);


  const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const [searchText, setSearchText] = useState("");

  const [inputValue, setInputValue] = useState("");

  const displayedOptions = useMemo(
    () => options.filter((option) => containsText(option.label, searchText)),
    [searchText]
  );

  const handleChange = (event, obj) => {

    console.log(obj)
  
    if(obj===null){
      onChange([]);
    }else{
      if(typeof obj === 'string'){
        onChange([]);
      }else{
        onChange(obj);
      }
    }
   
  }

  function haddleOpen(event){
    setOpen(true)
  }

  function haddleClose(event, reason){
    setOpen(false)
      if(reason==="blur"){
        setInputValue("")
      }
  }

  const CustomPaper = (props) => {
    return <Paper {...props}>
      <ListSubheader>
        <TextField
          size="small"
          autoFocus
          placeholder="Search..."
          fullWidth
          value={searchText}
          id="search-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Escape") {
              e.stopPropagation();
            }
          }}
        />
      </ListSubheader>
      {props.children}
    </Paper>
  }


  return (
    <ThemeProvider theme={theme}>
      {type==="default"?(<Box component={"div"} sx={{marginBottom:'20px'}}>
        <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
            <Typography variant="p">{label}</Typography>
            {tooltip?<Tooltip title={tooltip}  placement="top" arrow>
              <Icon sx={{color:'#898989',fontSize:'18px','.':{backgroundColor:'#000'}}}>error</Icon>
            </Tooltip>:''}
            {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
        </Box>
        <Autocomplete
            size={size}
            id="g-form-input"
            onChange={handleChange}
            value={value.length>0?value:{'value':'' ,'label':''}}
            freeSolo
            sx={value.length>0?{'.MuiOutlinedInput-root':{'border':'2px solid #8C30F5'}}:{'.MuiAutocomplete-clearIndicator':{'display':'none'}}}
            options={options}
            getOptionLabel={(option) => option.length===1?option[0].label:option.label}
            loading={true}
            loadingText="Nothing found"
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
                {option.label}
              </Box>
            )}
            renderInput={(params) =>  <TextField {...params} label="" 
            placeholder={placeholder}
            InputProps={{ ...params.InputProps, 
            startAdornment: value.length === 0 ?(<InputAdornment position="start"> <Icon>search</Icon>
            </InputAdornment> ): 
              (value[0].icon?
                (typeof value[0].icon === 'string'?
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={value[0].icon}
                      alt={value[0].label}
                    />:
                    value[0].icon.map((icon,i)=>(
                      <img
                      key={i}
                      loading="lazy"
                      width="16"
                      height="16"
                      src={icon}
                      alt={value[0].label}
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
      </Box>):
      
      (
        
        <Box component={"div"} sx={{marginBottom:'20px'}}>
        <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
            <Typography variant="p">{label}</Typography>
            {tooltip?<Tooltip title={tooltip}  placement="top" arrow>
              <Icon sx={{color:'#898989',fontSize:'18px','.':{backgroundColor:'#000'}}}>error</Icon>
            </Tooltip>:''}
            {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
        </Box> 
      <Autocomplete
        multiple
        id="tags-filled"
        options={options}
        onChange={handleChange}
        onOpen={haddleOpen}
        onClose={haddleClose}
        open={open}
          /*
        PaperComponent={CustomPaper}*/
        disableClearable={true}
        clearOnBlur={true}
        freeSolo
        value={value}
        sx={value.length>0?{'.MuiFilledInput-root':{'border':'2px solid #8C30F5'}}:''}
        getOptionLabel={(option)=> option.label?option.label:""}
        renderTags={(value) =>
          value.map((option, index) => (
            <Box component="li" key={option.value} sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>        
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
            {typeof option === 'string' ? (option) : option.label}
          </Box>
          ))
        }
        renderOption={(props, option) => (
          <Box component="div"  key={option.value} {...props}>
            <Box component="div" className='full_img_box'>        
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
                      key={icon}
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
              {variant==="full"?<h5>{option.label}</h5>:option.label}
              {variant==="full"?<span>{option.reference}</span>:''}
            </Box>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder={value.length===0?placeholder:''}
            value={inputValue}
            onChange={(e) => console.log(e.target.value)}
          />
        )}
      />
       <Typography variant="span" className="texthelper">{texthelper}</Typography>
        </Box>
      )
      
      }
    </ThemeProvider>
  )
}


AutoCompleteInput.propTypes = {

  options : PropTypes.array.isRequired,
  label : PropTypes.string,
  placeholder : PropTypes.string,
  texthelper : PropTypes.string,
  required : PropTypes.bool,
  size : PropTypes.string,
  value : PropTypes.array,
  handleChange : PropTypes.func,
  type: PropTypes.string

}

AutoCompleteInput.defaultProps = {

  type: 'default',

}

export default AutoCompleteInput