import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    '& fieldset':{
                        border:'0px',   
                    },
                    '& > div':{
                        padding:'5px 10px!important',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#0B0D17',
                    }
                }
            }
        },
        MuiFormControl:{
            styleOverrides:{
                root:{
                    '& > label':{
                       color:'#898989!important',      
                        left: '-5px',
                        top: '-10px',
                    },
                    '& > .select-simple-value':{
                       background: '#F4F5F7'
                    }
                }
            }
        },
        MuiList:{
            styleOverrides:{
                root:{
                    '& > li':{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#141416',
                    },
                    '& > li:hover':{
                        background:'#FDFBFF',
                    },
                    '& > .Mui-selected':{
                        background:'#FDFBFF',
                    },
                    '& > .Mui-selected:hover':{
                        background:'#FDFBFF',
                    }
                }
            }
        }
    }
})
