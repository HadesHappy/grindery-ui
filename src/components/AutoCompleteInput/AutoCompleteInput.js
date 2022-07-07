import React from "react";
import {
  Autocomplete,
  Icon,
  TextField,
  InputAdornment,
  Typography,
  Box,
  Tooltip,
  Paper,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { theme } from "./Style";

const styleDescription = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px!important",
  lineHeight: "150%!important",
  color: "#898989!important",
  margin: "0px",
};

const styleButton = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '150%',
  textAlign: 'center',
  color: '#0B0D17',
  border: '1px solid #898989',
  borderRadius: '5px',
  margin: '8px 10px',
  width: 'calc( 100% - 20px)',
  padding:'10px 0px'
}

function AutoCompleteInput({
  options,
  label,
  placeholder,
  size,
  required,
  texthelper,
  value,
  tooltip,
  buttonSuggestion,
  onChange,
}) {
  const currentValue = options.find((opt) => opt.value === value) || null;

  const PaperComponentCustom = options => {
    return (
      <Paper {...options.containerProps}>
        {options.children}
        {buttonSuggestion && (
            <Button sx={styleButton}>Suggers most Apps</Button>
           
        )}
      </Paper>
    );
  };

  const handleChange = (event, obj) => {
    onChange((obj && obj.value) || "");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={{ marginBottom: "20px" }}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            "& > .required ": {
              marginLeft: "auto",
              fontSize: "14px",
              color: "#898989",
            },
          }}
        >
          <Typography variant="p">{label}</Typography>
          {tooltip ? (
            <Tooltip title={tooltip} placement="top" arrow>
              <Icon
                sx={{
                  color: "#898989",
                  fontSize: "18px",
                  ".": { backgroundColor: "#000" },
                }}
              >
                error
              </Icon>
            </Tooltip>
          ) : (
            ""
          )}
          {required ? (
            <Typography variant="p" className="required">
              {"(required)"}
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <Autocomplete
          size={size}
          id="g-form-input"
          onChange={handleChange}
          value={currentValue}
          PaperComponent={PaperComponentCustom}
          filterOptions={(options, params) => { return options.filter(option => option.label.toLowerCase().includes(params.inputValue.toLowerCase()) && !option.group ).concat(options.filter(option => option.group )) }}
          sx={
            currentValue
              ? {
                  ".MuiOutlinedInput-root": {
                    boxShadow: "inset 0px 0px 0px 1px #8C30F5",
                    border: "1px solid #8C30F5",
                  },
                }
              : { ".MuiAutocomplete-clearIndicator": { display: "none" } }
          }
          options={options}
          groupBy={(option) => option.group}
          getOptionDisabled={(option) => option.disabled}
          getOptionLabel={(option) =>
            option.length === 1 ? option[0].label : option.label
          }
          loading={true}
          loadingText="Nothing found"
          renderOption={(props, option) => (
            <>
            {console.log(props)}
            <Box
              component="li"
              sx={{
                "& > img": {
                  mr: 1,
                  flexShrink: 0,
                  border: "1px solid #DCDCDC",
                  p: "4px",
                  borderRadius: "5px",
                },
              }}
              {...props}
            >
              {option.icon ? (
                typeof option.icon === "string" ? (
                  <img
                    loading="lazy"
                    width="16"
                    height="16"
                    src={option.icon}
                    alt={option.label}
                  />
                ) : (
                  option.icon.map((icon, i) => (
                    <img
                      key={i}
                      loading="lazy"
                      width="16"
                      height="16"
                      src={icon}
                      alt={option.label}
                      className={i > 0 ? "icon_second" : "icon_first"}
                    />
                  ))
                )
              ) : (
                ""
              )}

              {option.description ? (
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{ margin: 0, color: "#0B0D17!important" }}
                    variant="p"
                    title={option.label}
                  >
                    {option.label}
                  </Typography>
                  <Typography
                    sx={styleDescription}
                    variant="p"
                    title={option.description}
                  >
                    {option.description}
                  </Typography>
                </Box>
              ) : (
                <Typography
                  sx={{ margin: 0, color: "#0B0D17!important" }}
                  variant="p"
                  title={option.label}
                >
                  {option.label}
                </Typography>
              )}
              {option.paid ? (
                <Box component={"div"} className={"paid-label"}>
                  {" "}
                  <Typography variant="p">{"Paid"}</Typography>
                </Box>
              ) : (
                ""
              )}
              
            </Box>
           </>
          )}
          forcePopupIcon={false}
          renderInput={(params) => (
            <>
              {" "}
              <TextField
                {...params}
                label=""
                placeholder={placeholder}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: !currentValue ? (
                    <InputAdornment position="start">
                      {" "}
                      <Icon>search</Icon>
                    </InputAdornment>
                  ) : currentValue.icon ? (
                    <img
                      loading="lazy"
                      width="16"
                      height="16"
                      src={currentValue.icon}
                      alt={currentValue.label}
                    />
                  ) : null,
                }}
              />
              {currentValue ? (
                currentValue.paid ? (
                  <Box component={"div"} className={"paid-label"}>
                    {" "}
                    <Typography variant="p">{"Paid"}</Typography>
                  </Box>
                ) : null
              ) : null}
            </>
          )}
        />
        <Typography variant="span" className="texthelper">
          {texthelper}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

AutoCompleteInput.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  texthelper: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  tooltip: PropTypes.string,
  buttonSuggestion: PropTypes.bool
};

export default AutoCompleteInput;
