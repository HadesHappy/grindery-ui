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
                    padding: '15px 5px 15px 15px',
                },
                notchedOutline:{
                    border: 0,
                },
                input:{
                    padding:'0px'
                }
            }
        },
    }

})


