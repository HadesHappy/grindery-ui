import { optionGroupUnstyledClasses } from '@mui/base';
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
    '& .header-labels':{	
        display:'flex',
    },
    components:{
        
        MuiSwitch:{
            styleOverrides:{
                root:{
                    width: '45px',
                    height: 'auto',
                    padding:'0px',
                    ' & .Mui-checked+.MuiSwitch-track':{
                        backgroundColor: '#fff!important',
                        border: '1px solid #00B674',
                        opacity: 1,
                    },
                    ' & .Mui-checked > .MuiSwitch-thumb':{
                        backgroundColor:'#00B674',
                    }
                },
                track:{
                    height: '24px',
                    borderRadius: '16px',
                    border: '1px solid #758796',
                    backgroundColor: '#fff!important',
                      "&:after": {
                        content: "'On'",
                        left: "6px",
                        position: "absolute",
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '12px',
                        top: "4px",
                        lineHeight: '150%',
                        textAlign: 'right',
                        color: '#0B0D17'
                      },
                      "&:before": {
                        content: "'Off'",
                        right: "6px",
                        top: "4px",
                        position: "absolute",
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '12px',
                        lineHeight: '150%',
                        textAlign: 'right',
                        color: '#0B0D17'
                      }
                },
                thumb:{
                    width: '18px',
                    height: '18px',
                    background: '#758796'
                },
                switchBase:{
                    padding: '3px',
                    
                }
            }
        }

    }

})


