//TODO Utilisation du grid classique et pas celui tout naze de material ui

import React from 'react'
import { 
    Typography, 
    AppBar,
    Modal,
    Grid,
    Paper,
    Box
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';

const Header =()=> {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme()


    const body = (
        <Box height="70%" width="60%" position="absolute" top={window.innerHeight/6 + "px"} left={window.innerWidth/5} overflow="auto" style={{backgroundColor:"black", "&:hover" : {pointer:"cursor"}, padding:"2em"}}>
          <Typography variant="h3" style={{...theme.palette.blanc, textAlign:'center'}} >Informations</Typography>
          <ol>
              <li>
                  <Typography>Séléctionnez votre race en dessous du graphique, puis votre classe, les autres options viendront alors d'elles-mêmes.</Typography>
              </li>
              <li>
                  <Typography>Les bonus spéciaux, exceptés les slots et les stats par niveaux des classes, ne sont pas comptés dans le décompte final du graphique.</Typography>
              </li>
              <li>
                  <Typography>Si vous n'arrivez plus à sélectionner d'armes, c'est que vos slots d'armes sont pleins à cause d'une ou plusieurs arme à deux mains.</Typography>
              </li>
              <li>
                  <Typography>L'exception n'a pas encore été programmée, mais vous ne pouvez avoir qu'un seul équipement Semi-Légendaire du même nom.</Typography>
              </li>
              <li>
                  <Typography>Pour toute information supplémentaire concernant le système de jeu de Dùralas, merci de bien vouloir vous rendre sur <a href="https://www.lemondededuralas.org/" target="_blank" rel="noreferrer">Le Monde de Dùralas</a></Typography>
              </li>
              <li>
                  <Typography>Les droits d'auteur sont les mêmes que ceux décrits sur <a href="https://www.lemondededuralas.org/" target="_blank" rel="noreferrer">Le Monde de Dùralas</a> et concernent les mêmes personnes</Typography>
              </li>
          </ol>
          <Typography style={theme.palette.Exotique}>
            Les équipements écrits de cette couleur sont des armes exotiques, c'est-à-dire qu'ils sont typiques d'un peuple, d'une culture ou de tout regroupement quelque peu atypique. Ces équipements ne sont, généralement, pas accessibles via les boutiques et les crafts et leur taux de rareté est fort. Plusieurs personnes peuvent avoir le même équipement exotique.
          </Typography>
          <Typography style={theme.palette.semiLegendaire}>
            Les équipements écrits de cette couleur sont des équipements semi-légendaires, c'est-à-dire qu'ils ont été forgés en un seul exemplaire et qu'ils représentent la forte renommée d'un Dùralassien du passé ou de certaines créatures. Ces équipements ne sont pas accessibles via les boutiques et les crafts et leur taux de rareté est extrêmement fort. Chaque équipement semi-légendaire est unique, ce qui fait qu'un seul propriétaire n'est possible et aucun duplication ne peut se faire.
          </Typography>
        </Box>
      );


    return (
        <header>
            <AppBar position="static" elevation={30} sx={{borderBottom:1, borderColor: theme.palette.text.primary}} style={{boxShadow:"inset 0 -4px 5px -4px #422a12", height:"8vh"}}>
                <Grid container justify="center" alignItems="flex-end" height="100%">
                    <Grid height="100%" item>
                        <EqualizerIcon style={{...theme.palette.blanc, fontSize : 50}} />
                    </Grid>
                    <Grid height="100%" item>
                        <Typography variant="h2" style={{...theme.palette.blanc, lineHeight:"65px"}}>
                            Dùrastats
                        </Typography>
                    </Grid>
                    <Grid height="100%" item>
                        <InfoIcon onClick={() => setOpen(true)} style={{...theme.palette.blanc, fontSize : 40}} />
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>
                    </Grid>
                </Grid>
            </AppBar>
        </header>
    )
}

export default Header
