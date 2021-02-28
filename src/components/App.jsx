import React from 'react'

import Header from './Header'
import Form from './Form'
import Chart from './Chart'
//import Button2csv from './Button2csv'
import { useTheme } from '@material-ui/core/styles';
import { Box, Container} from '@material-ui/core'

const App = () => {
    const theme = useTheme()
    return (

        <Box style={{height:"100% auto"}}>
            <Header style={{borderBottom: "1px solid white"}} />
            <Container style={{...theme.palette.backgroundColorApp, height:"92% auto", minHeight:"92vh"}}>
                {/*<Button2csv />*/}
                <Chart />
                <Form />
            </Container>
        </Box>
        
    )
}

export default App;