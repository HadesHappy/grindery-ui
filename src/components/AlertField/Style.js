import { createTheme } from '@mui/material/styles';

const severity = {	

    primary: {
        main: '#F1E4FF',
    },
    secondary: {
        main: '#FFE7E7',
    },
    warning:{
        main:'#FFF1D7'
    }  
}


export const theme = createTheme({
    severity:severity,
    components: {
        MuiAlert: {
            styleOverrides: {
                message:{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '150%',
                    textAlign: 'right',
                    color: '#0B0D17'
                },
                icon:{
                    marginRight:'10px',
                    fontSize: '20px',
                }
            }
        }
    }
})
