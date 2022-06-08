import React, { useState, useMemo } from "react";
import PropTypes from 'prop-types'
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  ListSubheader,
  TextField,
  InputAdornment,
  ThemeProvider,
  InputLabel,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {theme} from './Style';


function SelectInput({options, type, label, placeholder , variant, texthelper,  required, onChange}) {

    const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

    const [searchText, setSearchText] = useState("");

    const displayedOptions = useMemo(
      () => options.filter((option) => containsText(option.label, searchText)),
      [searchText]
    );


    const [newListValue,setNewListValues] = useState([]);
  
    const handleChange = (event) => {

      if(!Array.isArray(event.target.value)){
        setNewListValues([event.target.value]);
      }else{
        setNewListValues(event.target.value);
      }
      
      onChange(event.target.value)

    }


  return (
    <ThemeProvider theme={theme}>
      {type === 'default' ? (
        <Box component={"div"} sx={{marginBottom:'20px'}}>
          <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
            <Typography variant="p">{label}</Typography>
            {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
          </Box>      
        <FormControl fullWidth>
          {newListValue.length===0?<InputLabel disableAnimation shrink={false} focused={false}>{placeholder}</InputLabel>:''}
          <Select
            MenuProps={{ autoFocus: false }}
            labelId="search-select-label"
            id={newListValue.length!==0?"search-select":"search-select-empty"}
            value={newListValue}
            multiple={false}
            onChange={handleChange}
            onClose={() => setSearchText("")}
            renderValue={() =>
              /*options.map((option, i) => (
                option.value===newValue?(
                  <Box key={i} component="div" className="img_box_icon"  sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                    {option.icon?
                      (typeof option.icon === 'string'?
                      <img
                        loading="lazy"
                        width="16"
                        height="16"
                        src={option.icon}
                        alt={option.label}
                      />:
                        option.icon
                      )
                    :''}
                    {option.label}
                </Box>
                ):''
              ))*/
              <Box component={"div"} className="boxItems">
              {newListValue.map((option, i) => (
                  <Box key={i} component="div" className="img_box_icon"  sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                    {option.icon?
                      (typeof option.icon === 'string'?
                      <img
                        loading="lazy"
                        width="16"
                        height="16"
                        src={option.icon}
                        alt={option.label}
                      />:
                        option.icon
                      )
                    :''}
                    {option.label}
                  </Box>
              ))}
              </Box>
            }
          >

            {displayedOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                <Box component="div" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                  {option.icon?
                    (typeof option.icon === 'string'?
                        <img src={option.icon} width={16} height={16} alt={option.label}></img>:option.icon
                    ):''}
                  {option.label}
                </Box>
              </MenuItem>
            ))}
          </Select>
          <Typography variant="p" className="texthelper">{texthelper}</Typography>
        </FormControl>
        </Box>
      ): type==='searchLabel' ? (
        <Box  component={"div"} sx={{marginBottom:'20px'}}>
        <Box component={"div"} sx={{display:'flex' , '& > .required ':{marginLeft:'auto' , fontSize: '14px' , color: '#898989'}} }>
          <Typography variant="p">{label}</Typography>
          {required?<Typography variant="p" className="required">{"(required)"}</Typography>:''}
        </Box>
        <FormControl fullWidth>
          {newListValue.length===0?<InputLabel disableAnimation shrink={false} focused={false}>{placeholder}</InputLabel>:''}
          <Select
            MenuProps={{ autoFocus: true }}
            labelId="search-select-label"
            id={newListValue.length!==0?"search-select":"search-select-empty"}
            value={newListValue}
            multiple={true}
            onChange={handleChange}
            onClose={() => setSearchText("")}
            renderValue={() => 
            

              /* *
              options.map((option, i) => (
                option.value===newValue?(
                  <Box key={i} component="div" className={variant==="default"?"img_box_icon":"full_img_box"}  sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                    {option.icon?
                      (typeof option.icon === 'string'?
                      <img
                        loading="lazy"
                        width="16"
                        height="16"
                        src={option.icon}
                        alt={option.label}
                      />:
                        option.icon
                      )
                    :''}
                    {option.label}
                </Box>
                ):''
              ))*/
              <Box component={"div"} className="boxItems">
              {newListValue.map((option, i) => (
                <Box key={i} component="div" className={variant==="default"?"img_box_icon":"full_img_box"} sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                  {option.icon?
                    (typeof option.icon === 'string'?
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={option.icon}
                      alt={option.label}
                    />:
                      option.icon
                    )
                  :''}
                  {option.label}
                </Box>
            ))}

            </Box>
            
            }
            
          >
            {<ListSubheader>
              <TextField
                size="small"
                autoFocus
                placeholder="Search..."
                fullWidth
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
              </ListSubheader>}
            {displayedOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                <Box component="div" className={variant==="full"?"full_img_box":'img_box_icon'}>
                  {option.icon?
                    (typeof option.icon === 'string'?
                        <img src={option.icon} width={16} height={16} alt={option.label}></img>:option.icon
                    ):''}
                  <h5>{option.label}</h5>
                  <span>{option.reference}</span>
                </Box>
              </MenuItem>
            ))}
          </Select>
          <Typography variant="p" className="texthelper">{texthelper}</Typography>
        </FormControl>
        </Box>
      ):''
      
      }

    </ThemeProvider>
  )
}


SelectInput.propTypes = {

  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,

}


SelectInput.defaultProps = {

  options: [],
  placeholder: '0x',
  type: 'default',
  variant:'default',
  onChange: () => undefined

}

export default SelectInput

