import React from 'react'
import { Tabs , Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './Style';
import PropTypes from 'prop-types'

function TabComponent({value,type,options,variant,orientation,activeIndicatorColor,tabColor,activeColor,onChange}) {


  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        {type==="text"?<Tabs
          TabIndicatorProps={{style: {background:activeIndicatorColor}}}
          orientation={orientation}
          value={value}
          onChange={handleChange}
          variant={variant}
          aria-label="scrollable force tabs example"
          sx={{'.Mui-selected':{color:activeColor+"!important"} , '.MuiTab-root':{color:tabColor}}}
        >
        {options.map((option,index)=>

          <Tab key={index} label={option} />
      
        )}
      </Tabs>
      
      
      :

      <Tabs
        TabIndicatorProps={{style: {background:activeIndicatorColor}}}
        value={value}
        orientation={orientation}
        onChange={handleChange}
        variant="scrollable"
        aria-label="scrollable"
        sx={{'.Mui-selected':{color:activeColor+"!important"} , '.MuiTab-root':{color:tabColor}}}
      >
      {options.map((option,index)=>

        <Tab key={index} icon={option} />
       )}

      </Tabs>
      }
    </ThemeProvider>
  )
}


TabComponent.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    orientation: PropTypes.string,
    activeIndicatorColor: PropTypes.string.isRequired,
    tabColor: PropTypes.string.isRequired,
    activeColor: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TabComponent