import React, { useRef, useMemo, useCallback, useState, useEffect } from "react";
import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { createEditor, Transforms } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";
import Foco from "react-foco";
import _ from "lodash";
import { theme } from "./Style";
import SearchIcon from "@mui/icons-material/Search";
import TabComponent from "../TabComponent/TabComponent";
import { styled } from "@mui/material/styles";
import InputBox from "../InputBox/InputBox";
import ButtonElement from "../ButtonElement/ButtonElement";

const RichInput = ({
  value,
  onChange,
  options,
  label,
  required,
  tooltip,
  placeholder,
  hasAddressBook,
  user,
  addressBook,
  setAddressBook
}) => {
  const editor = useMemo(
    () => withReferences(withReact(withHistory(createEditor()))),
    []
  );
  const inputRef = useRef(null);
  const groupedOptions = _.groupBy(options, "group");
  const [tab, setTab] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [addressBookView, setAddressBookView] = useState("list"); // add, edit
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [focused, setFocused] = useState(false);

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

  const renderLabel = () => (
    <Box component={"div"} className="rich-input__label-wrapper">
      <Typography variant="p" className="rich-input__label">
        {label}
      </Typography>
      {tooltip ? (
        <Tooltip title={tooltip} placement="top" arrow>
          <Icon className="rich-input__label-tooltip">error</Icon>
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
  );

  const renderDropdown = () => {
    const tabs = Object.keys(groupedOptions);
    if (hasAddressBook) {
      tabs.push("Address Book");
    }
    return focused ? (
      <Box className="rich-input__dropdown">
        {tabs.length > 1 && (
          <Box className="rich-input__dropdown-tabs-wrapper">
            <TabComponent
              value={tab}
              onChange={(index) => {
                setTab(index);
              }}
              options={tabs}
              orientation="horizontal"
              activeIndicatorColor="#A963EF"
              activeColor="#8C30F5"
              type="text"
              tabColor=""
              variant="scrollable"
            />
          </Box>
        )}
        {hasAddressBook &&
          (tabs.length > 1 ? tab === tabs.indexOf("Address Book") : true) && (
            <div className="rich-input__dropdown-address-book">
              <div
                className="rich-input__dropdown-address-book-title"
                style={{ marginLeft: addressBookView === "list" ? 0 : "auto" }}
              >
                {addressBookView === "list" && "Address Book"}
                {addressBookView === "add" && "Add new"}
                {addressBookView === "edit" && "Edit"}
              </div>
              <IconButton
                onClick={() => {
                  if (addressBookView === "list") {
                    setAddressBookView("add");
                  } else {
                    setSelectedAddress(null);
                    setAddressBookView("list");
                  }
                }}
                style={{
                  position: "absolute",
                  left: addressBookView === "list" ? "auto" : "15px",
                  right: addressBookView !== "list" ? "auto" : "15px",
                }}
              >
                {addressBookView === "list" && <PlusIcon />}
                {addressBookView === "add" && <BackIcon />}
                {addressBookView === "edit" && <BackIcon />}
              </IconButton>
            </div>
          )}
        <Box>
          {Object.keys(groupedOptions).map((key, i) => (
            <React.Fragment key={key}>
              {groupedOptions[key].length > 0 && i === tab && renderSearch()}
              {groupedOptions[key].length > 0 && (
                <Box className="rich-input__dropdown-options-wrapper">
                  <Box
                    sx={{
                      display: i === tab ? "flex" : "none",
                    }}
                    className="rich-input__dropdown-options"
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
                      .map((option) => renderOption(option))}
                  </Box>
                </Box>
              )}
            </React.Fragment>
          ))}
          {hasAddressBook && tab === tabs.indexOf("Address Book") && (
            <>
              {addressBookView === "list" && (
                <>
                  {addressBook.length > 0 &&
                    tab === tabs.indexOf("Address Book") &&
                    renderSearch()}
                  {addressBook.length > 0 && (
                    <Box
                      sx={{
                        display:
                          tab === tabs.indexOf("Address Book")
                            ? "flex"
                            : "none",
                      }}
                      className="rich-input__dropdown-options"
                    >
                      {addressBook
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
                        .map((option) => renderOption(option))}
                    </Box>
                  )}
                </>
              )}
              {addressBookView === "add" && (
                <div className="rich-input__dropdown-address-book-form">
                  <AddAddressForm
                    setAddressBookView={setAddressBookView}
                    setAddressBook={setAddressBook}
                    addressBook={addressBook}
                    editor={editor}
                    user={user}
                  />
                </div>
              )}
              {addressBookView === "edit" && (
                <div className="rich-input__dropdown-address-book-form">
                  <EditAddressForm
                    setAddressBookView={setAddressBookView}
                    setAddressBook={setAddressBook}
                    addressBook={addressBook}
                    editor={editor}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    user={user}
                  />
                </div>
              )}
            </>
          )}
        </Box>
      </Box>
    ) : null;
  };

  const renderSearch = () => (
    <Box sx={{ margin: "10px" }}>
      <TextField
        size="small"
        autoFocus
        placeholder="Search..."
        fullWidth
        value={searchText}
        autoComplete="off"
        type="text"
        className="rich-input__search-input"
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
  );

  const renderOption = (option) => (
    <Box
      component="div"
      key={option.value}
      className={`rich-input__dropdown-option ${
        option.isAddressBook ? "has-actions" : ""
      }`}
    >
      <Box
        component="div"
        className="rich-input__dropdown-option-frame"
        onClick={() => {
          insertReference(editor, option);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            insertReference(editor, option);
          }
        }}
        tabIndex="0"
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
        <span>
          <strong>{option.label}</strong> {option.reference}
        </span>
      </Box>
      <div className="rich-input__dropdown-option-actions">
        {option.isAddressBook && (
          <>
            <IconButton
              aria-label="edit"
              onClick={() => {
                setSelectedAddress(option);
                ReactEditor.focus(editor);
                setAddressBookView("edit");
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                handleOptionDelete(option);
              }}
            >
              <Deleteicon />
            </IconButton>
          </>
        )}
      </div>
    </Box>
  );

  const handleOptionDelete = (option) => {
    const newAddressBook = [
      ...addressBook.filter(
        (address) =>
          address.value !== option.value && address.label !== option.label
      ),
    ];
    localStorage.setItem(
      "gr_addressBook__" + user,
      JSON.stringify(newAddressBook)
    );
    ReactEditor.focus(editor);
    setAddressBook(newAddressBook);
  };

  return (
    <ThemeProvider theme={theme}>
      <Foco
        onClickOutside={() => {
          setFocused(false);
        }}
        onFocusOutside={() => {
          setFocused(false);
          setSearchText("");
        }}
      >
        <RichInputWrapper ref={inputRef}>
          <Box className="rich-input">
            {renderLabel()}
            <div>
              <Slate
                editor={editor}
                value={initialValue}
                onChange={(value) => {
                  const isAstChange = editor.operations.some(
                    (op) => "set_selection" !== op.type
                  );
                  if (isAstChange) {
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
                    setFocused(true);
                  }}
                />
                {(options.length > 0 || hasAddressBook) && renderDropdown()}
              </Slate>
            </div>
          </Box>
        </RichInputWrapper>
      </Foco>
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
      className="rich-input__reference"
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

const AddAddressForm = ({
  addressBook,
  setAddressBook,
  setAddressBookView,
  editor,
  user,
}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (name && address) {
      const newAddressBook = [
        {
          value: address,
          label: name,
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGqSURBVHgBnVTLbcJAEF0bJMSNdGA6IBUAFYQOAhUEX0CccC78LlYqwKkAUkEowR1kS/CJn2Q771nexES242Wk9axmPW/efHYNkYrjOK1mszk3DGMYx3FL6ImcTqdtbgxlWa/XHlQXy46iKKiKZJomg+/g057NZrJOo+u6rev1+gxjH8aD0JDlcmkB9DcAP+fzWaUo85w2m00Hjj1RQeri/+ifqGnCAmWRaRayyMcsAyQYlH86nR5YI+wlbNtSn6ID1hXKQtdfMQEBWQF0BFuPzLUBlYRhmB0hi5/L5VI4BYU1tG07QM32THGxWNhJdNN0UU+PjLUBKXD2kfKgVqvtlA370hktTHm1Ws3BaEyybEramBGCDMF8LHQYsuhg5tAZV+o9c+QBLIB9i7RzU88FBLMONUcF4E72DLbkujUajQEDVAIEO47IAbqbdw6GB9TSzzvLBZxMJvy5L+6QG0DeDNTIEvoi1WzeACKVD6y9qC49lOUFj8ujatBfhl6abiVJpyHIdjv7wH5B+WjGW0U8Nm+A9cT5VO/oDyDfPM4Xth2hKWR5PB7bZPoNqljWhJyzkjoAAAAASUVORK5CYII=",
          group: "Address Book",
          reference: address,
          insertValue: true,
          isAddressBook: true,
        },
        ...addressBook,
      ];
      localStorage.setItem(
        "gr_addressBook__" + user,
        JSON.stringify(newAddressBook)
      );
      setAddressBook(newAddressBook);
      ReactEditor.focus(editor);
      setAddressBookView("list");
    } else {
      ReactEditor.focus(editor);
    }
  };

  return (
    <>
      <InputBox
        label="Name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <InputBox
        label="Contract Address"
        placeholder="0x"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <ButtonElement
        value="Add Address"
        color="primary"
        onClick={handleSubmit}
      />
    </>
  );
};

const EditAddressForm = ({
  addressBook,
  setAddressBook,
  setAddressBookView,
  editor,
  selectedAddress,
  setSelectedAddress,
  user,
}) => {
  const [name, setName] = useState(selectedAddress.label || "");
  const [address, setAddress] = useState(selectedAddress.value || "");

  const handleSubmit = () => {
    if (name && address) {
      const newAddressBook = [
        ...addressBook.map((addr) => {
          if (
            addr.value === selectedAddress.value &&
            addr.label === selectedAddress.label
          ) {
            return {
              ...addr,
              label: name,
              value: address,
              reference: address,
            };
          }
        }),
      ];
      localStorage.setItem(
        "gr_addressBook__" + user,
        JSON.stringify(newAddressBook)
      );
      setAddressBook(newAddressBook);
      setSelectedAddress(null);
      ReactEditor.focus(editor);
      setAddressBookView("list");
    } else {
      ReactEditor.focus(editor);
    }
  };

  return (
    <>
      <InputBox
        label="Name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <InputBox
        label="Contract Address"
        placeholder="0x"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <ButtonElement
        value="Save Address"
        color="primary"
        onClick={handleSubmit}
      />
    </>
  );
};

const RichInputWrapper = styled("div")({
  "& .rich-input": {
    fontFamily: "Roboto",
    position: "relative",
    marginBottom: "20px",
    '& p[data-slate-node="element"]': {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "32px",
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
      borderRadius: "5px",
      padding: "12px 15px",
      margin: 0,
      overflow: "hidden",
      boxSizing: "border-box",
      minHeight: "54px !important",
      border: "1px solid #DCDCDC",
      boxShadow: "none",
    },
    "& .rich-input__search-input .MuiOutlinedInput-root.Mui-focused": {
      border: "1px solid #8C30F5",
      boxShadow: "inset 0px 0px 0px 1px #8C30F5",
    },
    "& .rich-input__label-wrapper": {
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
    },
    "& .rich-input__label": { lineHeight: "150%", textAlign: "left" },
    "& .rich-input__label-tooltip": {
      marginBottom: "3px",
      color: "#898989",
      fontSize: "18px",
      ".": { backgroundColor: "#000" },
    },
    "& .rich-input__dropdown": {
      position: "absolute",
      left: 0,
      width: "100%",
      top: "calc(100% + 7px)",
      background: "#FFFFFF",
      border: "1px solid #DCDCDC",
      boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.15)",
      borderRadius: "5px",
      boxSizing: "border-box",
      //display: "none",
      zIndex: 2,
    },
    "& .rich-input__dropdown-tabs-wrapper": {
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
    },
    "& .rich-input__dropdown-options-wrapper": {
      maxHeight: "285px",
      overflow: "auto",
      overscrollBehavior: "auto",
    },
    "& .rich-input__dropdown-options": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      flexDirection: "column",
      gap: "4px",
      paddingBottom: "10px",
      margin: "0px 10px 0",
    },
    "& .rich-input__dropdown-option": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      flexDirection: "row",
      gap: "4px",
      maxWidth: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      fontSize: "16px",
      color: "#0B0D17",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "normal",
      width: "100%",
      "& .rich-input__dropdown-option-actions": {
        display: "none",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "nowrap",
        flexDirection: "row",
        marginLeft: "auto",
        "& > * ": {
          marginLeft: "16px",
        },
        "& .MuiIconButton-root": {
          padding: 0,
        },
      },
      "&.has-actions:hover .rich-input__dropdown-option-actions": {
        display: "flex",
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
      "& span strong": {
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
      "& .rich-input__dropdown-option-frame": {
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        gap: "5px",
        border: "1px solid #DCDCDC",
        padding: "4px",
        borderRadius: "5px",
        background: "#fff",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        maxWidth: "100%",
        boxSizing: "border-box",
      },
      "& .rich-input__dropdown-option-frame:hover": {
        border: "1px solid #8C30F5",
      },
      "& .rich-input__dropdown-option-frame:focus": {
        border: "1px solid #8C30F5",
        outline: "none",
      },
    },
    "& .rich-input__reference": {
      background: "#FFFFFF",
      boxShadow: "inset 0px 0px 0px 1px #898989",
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
    },
    "& .rich-input__dropdown-address-book": {
      background: "#FFFFFF",
      boxShadow: "inset 0px -2px 0px #F4F5F7",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",
      flexDirection: "row",
      "& .rich-input__dropdown-address-book-title": {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "150%",
        marginRight: "auto",
      },
    },
    "& .rich-input__dropdown-address-book-form": {
      margin: "10px 10px 0",
      "& > .MuiBox-root": {
        marginBottom: "10px",
      },
      "& .MuiFormControl-root": {
        background: "none",
      },
    },
  },
});

const EditIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2185_50396)">
      <path
        d="M15.2353 0.765303C14.7821 0.312767 14.1678 0.0585938 13.5273 0.0585938C12.8869 0.0585938 12.2726 0.312767 11.8193 0.765303L0.976677 11.608C0.666178 11.9167 0.419985 12.284 0.252342 12.6885C0.0846994 13.093 -0.00106532 13.5268 9.98748e-06 13.9646V15.3333C9.98748e-06 15.5101 0.0702479 15.6797 0.195272 15.8047C0.320296 15.9297 0.489866 16 0.666677 16H2.03534C2.47319 16.0012 2.90692 15.9156 3.31145 15.748C3.71597 15.5805 4.08325 15.3344 4.39201 15.024L15.2353 4.18064C15.6877 3.72743 15.9417 3.11328 15.9417 2.47297C15.9417 1.83266 15.6877 1.21851 15.2353 0.765303ZM3.44934 14.0813C3.07335 14.4548 2.56532 14.6651 2.03534 14.6666H1.33334V13.9646C1.33267 13.7019 1.38411 13.4417 1.4847 13.1989C1.58529 12.9562 1.73302 12.7359 1.91934 12.5506L10.148 4.32197L11.6813 5.8553L3.44934 14.0813ZM14.292 3.23797L12.6213 4.9093L11.088 3.3793L12.7593 1.70797C12.86 1.60751 12.9795 1.52786 13.111 1.47358C13.2424 1.41929 13.3833 1.39143 13.5255 1.39158C13.6678 1.39174 13.8086 1.41991 13.9399 1.47448C14.0712 1.52905 14.1905 1.60896 14.291 1.70964C14.3915 1.81032 14.4711 1.9298 14.5254 2.06126C14.5797 2.19272 14.6076 2.33359 14.6074 2.47581C14.6072 2.61804 14.5791 2.75885 14.5245 2.89019C14.4699 3.02153 14.39 3.14084 14.2893 3.2413L14.292 3.23797Z"
        fill="#8C30F5"
      />
    </g>
    <defs>
      <clipPath id="clip0_2185_50396">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Deleteicon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9987 2.66667H11.932C11.7773 1.91428 11.3679 1.23823 10.7729 0.752479C10.1778 0.266727 9.4335 0.000969683 8.66536 0L7.33203 0C6.56389 0.000969683 5.81958 0.266727 5.22453 0.752479C4.62948 1.23823 4.2201 1.91428 4.06536 2.66667H1.9987C1.82189 2.66667 1.65232 2.7369 1.52729 2.86193C1.40227 2.98695 1.33203 3.15652 1.33203 3.33333C1.33203 3.51014 1.40227 3.67971 1.52729 3.80474C1.65232 3.92976 1.82189 4 1.9987 4H2.66536V12.6667C2.66642 13.5504 3.01795 14.3976 3.64284 15.0225C4.26774 15.6474 5.11497 15.9989 5.9987 16H9.9987C10.8824 15.9989 11.7297 15.6474 12.3546 15.0225C12.9794 14.3976 13.331 13.5504 13.332 12.6667V4H13.9987C14.1755 4 14.3451 3.92976 14.4701 3.80474C14.5951 3.67971 14.6654 3.51014 14.6654 3.33333C14.6654 3.15652 14.5951 2.98695 14.4701 2.86193C14.3451 2.7369 14.1755 2.66667 13.9987 2.66667ZM7.33203 1.33333H8.66536C9.07888 1.33384 9.48212 1.46225 9.81977 1.70096C10.1574 1.93967 10.413 2.27699 10.5514 2.66667H5.44603C5.58442 2.27699 5.83997 1.93967 6.17762 1.70096C6.51528 1.46225 6.91852 1.33384 7.33203 1.33333ZM11.9987 12.6667C11.9987 13.1971 11.788 13.7058 11.4129 14.0809C11.0378 14.456 10.5291 14.6667 9.9987 14.6667H5.9987C5.46827 14.6667 4.95956 14.456 4.58448 14.0809C4.20941 13.7058 3.9987 13.1971 3.9987 12.6667V4H11.9987V12.6667Z"
      fill="#8C30F5"
    />
    <path
      d="M6.66667 12C6.84348 12 7.01305 11.9297 7.13807 11.8047C7.2631 11.6797 7.33333 11.5101 7.33333 11.3333V7.33329C7.33333 7.15648 7.2631 6.98691 7.13807 6.86189C7.01305 6.73686 6.84348 6.66663 6.66667 6.66663C6.48986 6.66663 6.32029 6.73686 6.19526 6.86189C6.07024 6.98691 6 7.15648 6 7.33329V11.3333C6 11.5101 6.07024 11.6797 6.19526 11.8047C6.32029 11.9297 6.48986 12 6.66667 12Z"
      fill="#8C30F5"
    />
    <path
      d="M9.33464 12C9.51145 12 9.68102 11.9297 9.80604 11.8047C9.93106 11.6797 10.0013 11.5101 10.0013 11.3333V7.33329C10.0013 7.15648 9.93106 6.98691 9.80604 6.86189C9.68102 6.73686 9.51145 6.66663 9.33464 6.66663C9.15782 6.66663 8.98826 6.73686 8.86323 6.86189C8.73821 6.98691 8.66797 7.15648 8.66797 7.33329V11.3333C8.66797 11.5101 8.73821 11.6797 8.86323 11.8047C8.98826 11.9297 9.15782 12 9.33464 12Z"
      fill="#8C30F5"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2239_10657)">
      <path
        d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
        fill="#8C30F5"
      />
    </g>
    <defs>
      <clipPath id="clip0_2239_10657">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9493 1.00338C11.949 1.26851 11.8435 1.52269 11.6559 1.71005L6.54125 6.82472C6.38644 6.97949 6.26363 7.16324 6.17985 7.36548C6.09606 7.56771 6.05294 7.78448 6.05294 8.00338C6.05294 8.22229 6.09606 8.43905 6.17985 8.64129C6.26363 8.84353 6.38644 9.02728 6.54125 9.18205L11.6493 14.29C11.8314 14.4787 11.9322 14.7313 11.9299 14.9935C11.9276 15.2556 11.8225 15.5065 11.6371 15.6919C11.4517 15.8773 11.2008 15.9824 10.9387 15.9847C10.6765 15.987 10.4239 15.8862 10.2353 15.7041L5.12725 10.6C4.44043 9.91188 4.05469 8.97932 4.05469 8.00705C4.05469 7.03478 4.44043 6.10223 5.12725 5.41405L10.2419 0.29605C10.3818 0.156106 10.56 0.0607924 10.754 0.0221697C10.9481 -0.0164531 11.1492 0.00335101 11.332 0.079076C11.5148 0.154801 11.671 0.283043 11.7809 0.447576C11.8907 0.612108 11.9493 0.805536 11.9493 1.00338Z"
      fill="#8C30F5"
    />
  </svg>
);

export default RichInput;
