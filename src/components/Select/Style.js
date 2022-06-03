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
        }
    },
    components:{
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    border: '1px solid #DCDCDC',
                    borderRadius: 5,
                    background:'#FDFBFF',
                    padding: '0px!important',
                },
                notchedOutline:{
                    border: 0,
                },
                input:{
                    padding: '15px 5px 15px 15px',
                }
            }
        },
        MuiAutocomplete:{
            styleOverrides:{
                root:{
                    '& .MuiInputBase-sizeSmall':{	
                        width:'240px',
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
                    marginLeft:'15px',
                    marginRight:'0px',
                    width:'24px',
                    height:'24px',
                    '& > img':{
                        border:'1px solid #DCDCDC',
                        padding:'4px',
                        borderRadius:'5px',
                        marginLeft:'-5px'
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


