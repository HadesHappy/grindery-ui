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
                    background:'#F4F5F7',
                    padding: '0px!important',
                },
                notchedOutline:{
                    border: 0,
                },
                input:{
                    padding: '15px 5px 15px 5px',
                }
            }
        },
        MuiFormControl:{
            styleOverrides:{
                root:{
                    "& .Mui-focused": {
                        border: '2px solid #8C30F5',
                    },
                    "& #search-input": {
                        padding: '10px 5px 10px 10px',
                    },
                    "& .MuiInputLabel-shrink": {
                        display: 'none',
                    },
                    "& .img_box": {
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        border: '1px solid #DCDCDC',
                        padding: '4px',
                        borderRadius: '5px',
                        background: '#fff',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        position: 'absolute',
                        top: '13px',
                        left: '10px'
                    },

                    "& .img_box_icon": {
                        position: 'absolute',
                        top: '13px',
                        left: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                    },
                    "& .img_box_icon > img": {
                        background: '#fff',
                    },
                    "& .img_box > img": {
                        border:0,
                        padding:0,
                        borderRadius:0,
                        marginRight:0,
                    },
                    "& .MuiSelect-select":{
                        paddingLeft: '45px',
                    }
                }
            }   
        },
        MuiSelect:{
            styleOverrides:{
                select:{
                    '& > box':{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        border: '1px solid #898989',
                        padding: '2px 4px 2px 4px',
                        borderRadius: '5px',
                        background: '#fff',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        position: 'absolute',
                        top: '12px',
                        left: '10px'
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
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    padding:'5px 15px 5px 15px',
                    '& li':{
                            display:'flex',
                            alignItems:'center',
                            border:'1px solid #DCDCDC',
                            padding: '5px',
                            gap: '5px',
                            borderRadius: '5px',
                            background:'#FFFFFF',
                    
                    },
                    '& .onlyImg':{
                        border:0,
                        background:'initial',
                    },
                    '& .onlyImg img':{
                        display:'flex',
                        alignItems:'center',
                        border:'1px solid #DCDCDC',
                        padding: '5px',
                        gap: '5px',
                        borderRadius: '5px',
                        background:'#FFFFFF',
                    },
                    '& > div':{
                        display:'flex',
                        alignItems:'center',
                        padding: '5px',
                        gap: '5px',
                    },
                    '& h5':{
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#141416',
                        margin:'0px'
                    },
                    '& span':{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#898989',
                        margin:'0px'
                    }
                }
            }
        }
        


    }

})


