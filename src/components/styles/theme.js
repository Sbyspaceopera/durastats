import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        background: {
            paper: "#2C1D00",
            default: "#000"
        },
        primary: {
            light: "#4A4A4A",
            main: "#2C1D00",
            dark: "#303f9f",
            contrastText: "#DBCCA8"
        },
        secondary: {
            light: "#3D2E00",
            main: "#fff",
            dark: "#c51162",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            primary: "#DBCCA8",
            secondary: "#fff",
            disabled: "#DBCCA8",
            hint: "#DBCCA8"
        }
    },
    typography: {
        fontFamily: "'Philosopher', sans-serif;",
    }
})

export default theme;
