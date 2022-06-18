import React, { useMemo, useCallback, useState, useEffect } from "react";
import {
  Box,
  ClickAwayListener,
  Icon,
  InputAdornment,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { createEditor, Transforms } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";
import { theme } from "./Style";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";
import TabComponent from "../TabComponent";

const RichInput = ({
  value,
  onChange,
  options,
  label,
  required,
  tooltip,
  placeholder,
}) => {
  const editor = useMemo(
    () => withReferences(withReact(withHistory(createEditor()))),
    []
  );
  const groupedOptions = _.groupBy(options, "group");
  const [tab, setTab] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [empty, setEmpty] = useState(false);

  const renderElement = useCallback((props) => {
    return <Element {...props} />;
  }, []);

  const initialValue = useMemo(() => {
    const unserializeValue = (val) => {
      return (
        (val &&
          val.split(" ").map((v) => {
            if (
              /\{\{\s*([^}]+)\s*\}\}/g.test(v) &&
              options.find((opt) => opt.value === v)
            ) {
              return {
                type: "reference",
                children: [{ text: "" }],
                ...(options.find((opt) => opt.value === v) || {}),
              };
            } else {
              return {
                text: v,
              };
            }
          })) ||
        []
      );
    };

    return [
      {
        type: "paragraph",
        children: value ? unserializeValue(value) : [{ text: "" }],
      },
    ];
  }, [value, options]);

  const serializeValue = (val) => {
    return (
      (val &&
        val[0] &&
        val[0].children &&
        val[0].children
          .map((v) => {
            if (v.type === "reference") {
              return v.value;
            }
            return v.text;
          })
          .join(" ")) ||
      ""
    );
  };

  useEffect(() => {
    if (!value) {
      setEmpty(true);
    }
  }, [value]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          marginBottom: "20px",
          '& p[data-slate-node="element"]': {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#0B0D17",
            margin: 0,
            padding: 0,
            textAlign: "left",
          },
          '& [data-slate-placeholder="true"] p': {
            margin: 0,
          },
          '& div[role="textbox"]': {
            background: "#F4F5F7",
            border: !empty ? "1px solid #8C30F5" : "1px solid #DCDCDC",
            boxShadow: !empty ? "0px 0px 0px 1px #8C30F5" : "none",
            borderRadius: "5px",
            padding: "15px",
            margin: 0,
            overflow: "hidden",
            boxSizing: "border-box",
            minHeight: "54px !important",
          },
          "&:focus-within": {
            '& div[role="textbox"]': {
              border: "1px solid #8C30F5",
              boxShadow: "0px 0px 0px 1px #8C30F5",
            },
            "& .rich-input__dropdown": {
              display: "block",
            },
          },
        }}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            gap: "6px",
            marginBottom: "4px",
            "& > .required ": {
              marginLeft: "auto",
              fontSize: "14px",
              color: "#898989",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{ lineHeight: "150%", textAlign: "left" }}
          >
            {label}
          </Typography>
          {tooltip ? (
            <Tooltip title={tooltip} placement="top" arrow>
              <Icon
                sx={{
                  marginBottom: "3px",
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
            <Typography
              variant="p"
              sx={{ marginBottom: "3px" }}
              className="required"
            >
              {"(required)"}
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <ClickAwayListener
          onClickAway={() => {
            setSearchText("");
          }}
        >
          <div>
            <Slate
              editor={editor}
              value={initialValue}
              onChange={(value) => {
                const isAstChange = editor.operations.some(
                  (op) => "set_selection" !== op.type
                );
                if (isAstChange) {
                  console.log("value", value);
                  if (
                    value[0].children.length === 1 &&
                    value[0].children.length === 1 &&
                    value[0].children[0].text === ""
                  ) {
                    setEmpty(true);
                  } else {
                    setEmpty(false);
                  }
                  onChange(serializeValue(value));
                }
              }}
            >
              <Editable
                placeholder={placeholder || ""}
                renderPlaceholder={({ children, attributes }) => (
                  <span {...attributes}>
                    <span>{children}</span>
                  </span>
                )}
                editor={editor}
                renderElement={renderElement}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    return;
                  }
                }}
                onFocus={() => {
                  //setFocused(true);
                }}
              />
              <Box
                className="rich-input__dropdown"
                sx={{
                  position: "absolute",
                  left: 0,
                  width: "100%",
                  top: "calc(100% + 7px)",
                  background: "#FFFFFF",
                  border: "1px solid #DCDCDC",
                  boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.15)",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                  display: "none",
                  zIndex: 2,
                }}
              >
                {Object.keys(groupedOptions).length > 1 && (
                  <Box
                    sx={{
                      "& .MuiTabs-root": {
                        background: "transparent",
                        boxShadow: "inset 0px -2px 0px #F4F5F7",
                      },
                      "& .MuiTab-root": {
                        textTransform: "initial",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "150%",
                        color: "#0B0D17",
                      },
                    }}
                  >
                    <TabComponent
                      value={tab}
                      onChange={(index) => {
                        setTab(index);
                      }}
                      options={Object.keys(groupedOptions)}
                      orientation="horizontal"
                      activeIndicatorColor="#A963EF"
                      activeColor="#8C30F5"
                      type="text"
                      tabColor=""
                      variant="scrollable"
                    />
                  </Box>
                )}
                <Box sx={{ padding: "10px" }}>
                  <Box sx={{ marginBottom: "10px" }}>
                    <TextField
                      size="small"
                      autoFocus
                      placeholder="Search..."
                      fullWidth
                      value={searchText}
                      autoComplete="off"
                      type="text"
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
                  </Box>
                  {Object.keys(groupedOptions).map((key, i) => (
                    <Box
                      key={key}
                      sx={{
                        display: i === tab ? "flex" : "none",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexWrap: "nowrap",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {groupedOptions[key]
                        .filter(
                          (opt) =>
                            (opt.label &&
                              opt.label
                                .toLowerCase()
                                .includes(searchText.toLowerCase())) ||
                            (opt.reference &&
                              opt.reference
                                .toLowerCase()
                                .includes(searchText.toLowerCase()))
                        )
                        .map((option) => (
                          <Box
                            component="div"
                            key={option.value}
                            onClick={() => {
                              insertReference(editor, option);
                            }}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                insertReference(editor, option);
                              }
                            }}
                            tabIndex="0"
                            sx={{
                              cursor: "pointer",
                              maxWidth: "100%",
                              boxSizing: "border-box",
                              textAlign: "left",
                              fontSize: "16px",
                              color: "#0B0D17",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "normal",
                              "&:hover": {
                                backgroundColor: "#FDFBFF",
                              },
                              "& .icon_second": {
                                marginLeft: "-5px",
                                backgroundColor: "#FFFFFF",
                              },
                              "& .icon_first": {
                                zIndex: "1",
                                backgroundColor: "#FFFFFF",
                              },
                              "& img": {
                                backgroundColor: "#FFFFFF",
                              },
                              "& h5": {
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "16px",
                                lineHeight: "150%",
                                color: "#141416",
                                margin: "0px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                minWidth: "30%",
                              },
                              "& span": {
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "150%",
                                color: "#898989",
                                margin: "0px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              },
                              "& .full_img_box": {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px",
                                border: "1px solid #DCDCDC",
                                padding: "4px",
                                borderRadius: "5px",
                                background: "#fff",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "150%",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                                boxSizing: "border-box",
                              },
                              "&:hover .full_img_box": {
                                border: "1px solid #8C30F5",
                              },
                              "& .paid-label": {
                                backgroundColor: "#FF5858",
                                borderRadius: "2px",
                                right: "15px",
                                margin: "0px",
                                display: "flex",
                              },
                              "& .paid-label span": {
                                padding: "2px 6px",
                                textTransform: "uppercase",
                                color: "#FFFFFF",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "8px",
                                margin: "0px",
                              },
                            }}
                          >
                            <Box
                              component="div"
                              className="full_img_box"
                              title={`${option.label}${
                                option.reference ? ": " + option.reference : ""
                              }`}
                            >
                              {option.icon ? (
                                <img
                                  loading="lazy"
                                  width="16"
                                  height="16"
                                  src={option.icon}
                                  alt={option.label}
                                />
                              ) : null}
                              <h5>{option.label}</h5>
                              <span>{option.reference}</span>
                            </Box>
                          </Box>
                        ))}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Slate>
          </div>
        </ClickAwayListener>
      </Box>
    </ThemeProvider>
  );
};

const withReferences = (editor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = (element) => {
    return element.type === "reference" ? true : isInline(element);
  };

  editor.isVoid = (element) => {
    return element.type === "reference" ? true : isVoid(element);
  };

  return editor;
};

const Reference = ({ attributes, children, element }) => {
  return (
    <Box
      {...attributes}
      contentEditable={false}
      component="span"
      sx={{
        background: "#FFFFFF",
        border: "1px solid #898989",
        borderRadius: "5px",
        padding: "2px 8px",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "6px",
        margin: "2px",
        "& > img": {
          width: 16,
          height: 16,
        },
        "& > span": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          color: "#0B0D17",
          wordBreak: "break-word",
        },
      }}
    >
      {children}
      {element.icon ? (
        <img
          loading="lazy"
          width="16"
          height="16"
          src={element.icon}
          alt={element.label}
        />
      ) : null}
      <span>{element.label}</span>
    </Box>
  );
};

const insertReference = (editor, option) => {
  if (option && !option.insertValue) {
    const reference = {
      type: "reference",
      ...option,
      children: [{ text: "" }],
    };
    Transforms.insertNodes(editor, reference);
    Transforms.move(editor);
  } else {
    if (option && option.value) {
      Transforms.insertNodes(editor, {
        text: option.value,
      });
      Transforms.move(editor);
    }
  }
  ReactEditor.focus(editor);
};

const Element = (props) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case "reference":
      return <Reference {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default RichInput;
