import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiBackdrop:{
            styleOverrides:{
                root: {
                    background:'rgba(11, 13, 23, 0.5)',
                    backdropFilter: 'blur(20px)',
                }
            }
        },
        MuiDialog:{
            styleOverrides:{
                container:{
                    '& > div':{
                        width:'100%',
                        maxWidth:'100%',
                        margin:'30px',
                        padding:'20px',
                        borderRadius:10,
                    }
                }
            }
        }
    }
})

