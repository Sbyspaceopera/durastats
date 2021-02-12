import React from 'react'

import Header from './Header'
import Form from './Form'
import Chart from './Chart'
import { useTheme } from '@material-ui/core/styles';
import { Box, Container} from '@material-ui/core'

const App = () => {
    const theme = useTheme()
    return (

        <Box style={{height:"100% auto"}}>
            <Header style={{borderBottom: "1px solid white"}} height="25%" />
            <Container style={{...theme.palette.backgroundColorApp, height:"75% auto", minHeight:"75vh"}}>
                <Chart />
                <Form />
                
            </Container>
        </Box>
        
    )
}

export default App;