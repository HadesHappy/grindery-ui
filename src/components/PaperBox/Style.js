import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiPaper:{
            styleOverrides:{
                root: {
                    padding: '80px 106px',
                    borderRadius:10,
                    border: '1px solid 1px solid #DCDCDC',
                }
            }
        }
    }
})

