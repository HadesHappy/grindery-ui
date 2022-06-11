import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  
    components: {
        MuiTabs:{
            styleOverrides:{
                root:{
                    background:'#FDFBFF',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root:{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '150%',
                    textAlign: 'right',
                },
            }
        }
    }
})
