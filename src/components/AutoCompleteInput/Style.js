import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography:{
        p:{
            fontSize:16,
            fontFamily:'"Roboto"',
            color:'#0B0D17',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%',
        },
        span:{
            fontFamily:'"Roboto"',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '150%',
            color: '#898989'
        }
    },
    components:{
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    marginTop:'4px',
                    border: '1px solid #DCDCDC',
                    borderRadius: 5,
                    background:'#F4F5F7',
                    padding: '0px 10px 0px 10px!important',
                    '& > img':{
                        border:'1px solid #DCDCDC',
                        padding:'4px',
                        borderRadius:'5px',
                        background:'#FFFFFF',
                    },
                    '& .icon_second':{
                        marginLeft:'-5px',
                    },
                    '& .icon_first':{
                        zIndex:'1',
                    }
                },
                notchedOutline:{
                    border: 0,
                },
                input:{
                    padding: '15px 5px 15px 15px',
                }
            }
        },
        MuiFilledInput:{
            styleOverrides:{
                root:{
                    borderRadius: 4,
                    border: '1px solid #DCDCDC',
                    paddingTop:'0px!important',
                    background: '#F4F5F7!important',
                    '& li':{
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor:'#FFFFFF',
                        padding: '4px',
                        '& > img':{ 
                            border: 0,
                        },
                        borderRadius:'4px',
                        border:'1px solid #DCDCDC',
                        marginRight:'5px'
                    },
                    '&:hover:not(.Mui-disabled):before':{
                        border:0,
                    },
                    '&:hover':{
                        background: '#F4F5F7!important'
                    },
                    '&:after':{
                        border:0,
                    },

                    '&:before':{
                        border:0,
                    }
                }
            }
        },
        MuiAutocomplete:{
            styleOverrides:{
                root:{
                    height:'60px',
                    '& .MuiInputBase-sizeSmall':{	
                        width:'240px',
                    },
                },
                option:{
                    fontSize: '16px',
                    color: '#0B0D17',
                    '&:hover':{
                        backgroundColor:'#FDFBFF', 
                    },
                    '& .icon_second':{
                        marginLeft:'-12px',
                        backgroundColor:'#FFFFFF',
                    },
                    '& .icon_first':{
                        zIndex:'1',
                        backgroundColor:'#FFFFFF',
                    },
                    '& img':{
                        backgroundColor:'#FFFFFF',
                    }
                },
                input:{
                    padding:'15px 5px 15px 5px!important'
                },
                endAdornment:{
                    '& > button':{	
                         visibility: 'visible',
                         background:'#898989',
                         padding:'2px',
                         marginRight:'10px',
                         '& > svg':{	
                            fill:'#fff',
                            fontSize:'16px',
                            
                         }
                    }
                },
                hasClearIcon:{
                    '& > div > div': {
                        border:'2px solid #8C30F5'
                    }
                }
            }
        },
        MuiInputAdornment:{
            styleOverrides:{
                root:{
                    marginLeft:'0px',
                    marginRight:'0px',
                    width:'24px',
                    height:'24px',
                    '& > img':{
                        border:'1px solid #DCDCDC',
                        padding:'4px',
                        borderRadius:'5px',
                        marginLeft:'-5px',
                        background:'#FFFFFF',
                    }
                }
               
            }
        },
        
        MuiIcon:{
            styleOverrides:{
                root:{
                    fontSize:'24px',
                }
            }
        },
    }

})


