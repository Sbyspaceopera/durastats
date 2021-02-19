import React from 'react'
import { 
    Typography, 
    Container, 
    Card,
    CardContent,
    AppBar,
    Grid
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const Header =()=> {

    const theme = useTheme()

    return (
        <header height="25%">
            <AppBar position="static" elevation={30} sx={{borderBottom:1, borderColor: theme.palette.text.primary}} style={{boxShadow:"inset 0 -4px 5px -4px #422a12"}}>
                <Grid container justify="center" alignItems="flex-end">
                    <Grid item>
                        <EqualizerIcon style={{...theme.palette.blanc, fontSize : 50}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{...theme.palette.blanc, lineHeight:"60px"}}>
                            Dùrastats
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>

            <Container style={{backgroundColor: theme.palette.background.paper, width: "55%"}}>
                
                <Card>
                    <CardContent>
                        <Typography variant="h6" style={theme.palette.blanc}>
                            A venir
                        </Typography>
                    
                        <ul>
                            <li>Classes furtives</li>
                            <li>Montures/Familiers/Compagnons</li>
                            <li>Artefacts</li>
                            <li>Mise en forme</li>
                        </ul>
                        </CardContent>
                                
                </Card>
                
            </Container>
        </header>
    )
}

export default Header
