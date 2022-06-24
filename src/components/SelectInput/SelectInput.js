import React, { useState } from "react";
import PropTypes from "prop-types";
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
  Tooltip,
  Icon,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

function SelectInput({
  options,
  type,
  label,
  placeholder,
  variant,
  texthelper,
  value,
  multiple,
  required,
  tooltip,
  onChange,
}) {
  const [searchText, setSearchText] = useState("");

  const displayedOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentValue = multiple
    ? options.filter((opt) => value.includes(opt.value))
    : options.find((opt) => opt.value === value) || "";

  const handleChange = (event) => {
    onChange(
      multiple
        ? event.target.value.map((v) => v.value)
        : event.target.value.value
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {type === "default" ? (
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
          <FormControl fullWidth>
            {currentValue.length === 0 ? (
              <InputLabel disableAnimation shrink={false} focused={false}>
                {placeholder}
              </InputLabel>
            ) : (
              ""
            )}
            <Select
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 450,
                  },
                },
              }}
              labelId="search-select-label"
              id={currentValue.length !== 0 ? "search-select" : "search-select-empty"}
              sx={currentValue.length !== 0 ? { border: "0px" } : {}}
              value={currentValue}
              multiple={multiple}
              onChange={handleChange}
              onClose={() => setSearchText("")}
              renderValue={() => (
                <Box component={"div"} className="boxItems">
                  {(multiple ? currentValue : [currentValue]).map(
                    (option, i) => (
                      <Box
                        key={option.value}
                        component="div"
                        className="img_box_icon"
                        sx={{
                          "& > img": {
                            mr: 1,
                            flexShrink: 0,
                            border: "1px solid #DCDCDC",
                            p: "4px",
                            borderRadius: "5px",
                          },
                        }}
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
                        <Typography
                          sx={{ margin: 0, color: "#0B0D17!important" }}
                          variant="p"
                          title={option.label}
                        >
                          {option.label}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              )}
            >
              {displayedOptions.map((option, i) => (
                <MenuItem key={option.value} value={option}>
                  <Box
                    component="div"
                    sx={{
                      "& > img": {
                        mr: 1,
                        flexShrink: 0,
                        border: "1px solid #DCDCDC",
                        p: "4px",
                        borderRadius: "5px",
                      },
                    }}
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
                  </Box>
                </MenuItem>
              ))}
            </Select>
            <Typography variant="p" className="texthelper">
              {texthelper}
            </Typography>
          </FormControl>
        </Box>
      ) : type === "searchLabel" ? (
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
          <FormControl fullWidth>
            {currentValue.length === 0 ? (
              <InputLabel disableAnimation shrink={false} focused={false}>
                {placeholder}
              </InputLabel>
            ) : (
              ""
            )}
            <Select
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 450,
                  },
                },
              }}
              labelId="search-select-label"
              id={
                currentValue.length !== 0
                  ? "search-select"
                  : "search-select-empty"
              }
              value={currentValue}
              sx={currentValue.length > 0 ? { border: "0" } : {}}
              multiple={multiple}
              onChange={handleChange}
              onClose={() => setSearchText("")}
              renderValue={() => (
                <Box component={"div"} className="boxItems">
                  {(multiple ? currentValue : [currentValue]).map(
                    (option, i) => (
                      <Box
                        key={option.value}
                        component="div"
                        className={
                          variant === "default"
                            ? "img_box_icon"
                            : "full_img_box"
                        }
                        sx={{
                          "& > img": {
                            mr: 1,
                            flexShrink: 0,
                            border: "1px solid #DCDCDC",
                            p: "4px",
                            borderRadius: "5px",
                          },
                        }}
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
                        <Typography
                          sx={{ margin: 0, color: "#0B0D17!important" }}
                          variant="p"
                          title={option.label}
                        >
                          {option.label}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              )}
            >
              {
                <ListSubheader style={{top: '8px', paddingTop: '8px', transform: 'translateY(-8px)'}}>
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
                      ),
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
              }
              {displayedOptions.map((option, i) => (
                <MenuItem key={option.value} value={option}>
                  <Box
                    component="div"
                    className={
                      variant === "full" ? "full_img_box" : "img_box_icon"
                    }
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
                    {variant === "full" ? (
                      <h5>{option.label}</h5>
                    ) : (
                      <Typography
                        sx={{ margin: 0, color: "#0B0D17!important" }}
                        variant="p"
                        title={option.label}
                      >
                        {option.label}
                      </Typography>
                    )}
                    {variant === "full" ? <span>{option.reference}</span> : ""}
                  </Box>
                </MenuItem>
              ))}
            </Select>
            <Typography variant="p" className="texthelper">
              {texthelper}
            </Typography>
          </FormControl>
        </Box>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  multiple: PropTypes.bool,
  tooltip: PropTypes.string,
};

SelectInput.defaultProps = {
  options: [],
  placeholder: "0x",
  type: "default",
  variant: "default",
  multiple: false,
  onChange: () => undefined,
};

export default SelectInput;
