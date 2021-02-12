import { createMuiTheme } from '@material-ui/core/styles';
import bodyBackgroundImg from '../../img/bodyBackgroundImg.jpg'

const theme = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        background: {
            paper: "#1A1209",
            default: "#000"
        },
        primary: {
            light: "#4A4A4A",
            main: "#1A1209",
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
        },
        Humain:{color:"#FC0000"},
        Abyssal : {color: "#0091FF"},
        Djöllfulin : {color: "#FF2D00"},
        Elfe : {color: "#0C8A1F"},
        Géant : {color: "#D9D923"},
        Hybride : {color: "#4D3A1A"},
        Thérianthrope : {color: "#AD6A05"},
        Naga : {color: "#9326C9"},
        Nain : {color:"#2B2BC2"},
        "Peau-verte" : {color: "#024F23"},
        "Stryge Blanc" : {color: "#FCFCFC"},
        "Stryge Noir" : {color: "#3D3D3D"},
        Vampire: {color: "#A10000"},
        "Semi-Légendaire" : {color: "#DAA500"},
        "Exotique" : {color: "#0FF"},
        blanc: {color: "#fff"},
        couleurText: {color:"#DBCCA8"},
        Normale : {color: "#DBCCA8"},
        "Craft/Exotique" : {color : "0FF"},
        backgroundColorApp : {backgroundColor: "#000", width:"55%"}

    },
    typography: {
        fontFamily: "'Philosopher', sans-serif;",
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              backgroundImage: `url(${bodyBackgroundImg})`,
              backgroundRepeatX:'no-repeat',
              backgroundReapeatY:"repeat",
              backgroundSize:'cover',
              backgroundPosition:"center",
            }
          },
        }
    }
})

export default theme;
