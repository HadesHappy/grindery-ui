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


function SelectInput({options,type, placeholder,iconDefault,iconUrl, onChange}) {

    const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;


    const [selectedOption, setSelectedOption] = useState('');


    const [searchText, setSearchText] = useState("");
    


    const displayedOptions = useMemo(
      () => options.filter((option) => containsText(option.value, searchText)),
      [searchText]
    );

    const [isIcon, setIcon] = useState(true);
    const [value, setValue] = useState('');
  
  
  
    const handleChange = (event) => {
      onChange(event)
      setSelectedOption(event.target.value)
      if(!event.target.value){
        setIcon(true);
      }else{
        setIcon(false);
        setValue(event.target.value);
      }
    }

  return (
    <ThemeProvider theme={theme}>
      {type === 'default' ? (
        <>
        <Typography variant="p">{'Test'}</Typography>      
        <FormControl fullWidth>
          <InputLabel>{placeholder}</InputLabel>
          <Select
            MenuProps={{ autoFocus: false }}
            labelId="search-select-label"
            id="search-select"
            value={selectedOption}
            onChange={handleChange}
            onClose={() => setSearchText("")}
            startAdornment = {
              iconDefault?(<Box component="div" className="img_box" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
              <img
                loading="lazy"
                width="16"
                height="16"
                src={iconUrl}
                alt={iconUrl}
              />
              </Box>):isIcon===false?(
                <Box component="div" className="img_box" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={value.icon}
                      alt={value.value}
                    />
                </Box>):''
            }
            renderValue={() => selectedOption.value}
          >
            {options.map((option, i) => (
              <MenuItem key={i} value={option}>
                <Box component="div" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                  <img src={option.icon} width={16} height={16} alt={option.value}></img>
                  {option.value}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </>
      ): type==='searchLabel' ? (
        <>
        <Typography variant="p">{'Test'}</Typography>
        <FormControl fullWidth>
        <InputLabel>{placeholder}</InputLabel>
          <Select
            MenuProps={{ autoFocus: true }}
            labelId="search-select-label"
            id="search-select"
            value={selectedOption}
            onChange={handleChange}
            onClose={() => setSearchText("")}
            renderValue={() => <box component="div" className="box-seleted-icon">
              <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={selectedOption.icon}
                      alt={selectedOption.value}
              />    
              {selectedOption.value}</box>}
            
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
                <Box component="li">
                  <img src={option.icon} width={16} height={16} alt={option.value}></img>
                  <h5>{option.value}</h5>
                  <span>{option.reference}</span>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </>
      ):(
        <>
        <Typography variant="p">{'Select 3'}</Typography>
        <FormControl fullWidth>
          <InputLabel>{placeholder}</InputLabel>
          <Select
            MenuProps={{ autoFocus: true}}
            labelId="search-select-label"
            id="search-select"
            value={selectedOption}
            onChange={handleChange}
            onClose={() => setSearchText("")}
            startAdornment = {
              iconDefault && isIcon===true?(<Box component="div" className="img_box_icon" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
              <img
                loading="lazy"
                width="16"
                height="16"
                src={iconUrl}
                alt={iconUrl}      
              />
              </Box>):isIcon===false?(
                <Box component="div" className="img_box_icon" sx={{ '& > img': { mr: 1, flexShrink: 0, border:'1px solid #DCDCDC' ,p:'4px' , borderRadius:'5px' } }}>
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={value.icon}
                      alt={value.value}
                    />
                </Box>):''
            }
            renderValue={() => <box component="div" className="box-seleted-icon">
              <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={selectedOption.icon}
                      alt={selectedOption.value}
              />    
              {selectedOption.value}</box>}   
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
                <Box component="li" className="onlyImg">
                  <img src={option.icon} width={16} height={16} alt={option.value}></img>
                  <h5>{option.value}</h5>
                  <span>{option.reference}</span>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </>

      )
      
      }

    </ThemeProvider>
  )
}


SelectInput.propTypes = {

  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func  

}


SelectInput.defaultProps = {

  options: [],
  placeholder: '0x',
  type: 'default',
  onChange: () => undefined

}

export default SelectInput

