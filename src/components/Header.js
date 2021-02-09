import React from 'react'
import { 
    Typography, 
    Container, 
    Card,
    CardContent,
    AppBar,
    Grid
} from '@material-ui/core';

import EqualizerIcon from '@material-ui/icons/Equalizer';

const Header =()=> {

    return (
        <React.Fragment>
            <AppBar position="static" fontStyle="italic">
                <Grid container alignItems="center" alignContent="center" justify="center">
                    <Grid item>
                        <EqualizerIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h2">
                            Dùrastats
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>

            <Container>
                
                <Card>
                    <CardContent>
                        <Typography variant="h6">
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
        </React.Fragment>
    )
}

export default Header
