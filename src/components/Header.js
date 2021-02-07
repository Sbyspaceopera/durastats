import React from 'react'
import { 
    Typography, 
    Container, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails
} from '@material-ui/core';

const Header =()=> {

    return (
        <Container>
            <Typography variant='h1'>
                Dùrastats
            </Typography>

            <Accordion>
                <AccordionSummary>
                    <Typography variant="h6">
                        A venir
                    </Typography>
                </AccordionSummary>
                <AccordionDetails variant='p'>
                    <ul>
                        <li>Classes furtives</li>
                        <li>Montures/Familiers/Compagnons</li>
                        <li>Artefacts</li>
                        <li>Mise en forme</li>
                    </ul>
                </AccordionDetails>
                        
        
                
            </Accordion>
            
        </Container>
    )
}

export default Header
