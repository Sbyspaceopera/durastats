import React from 'react'

import Header from './Header'
import Form from './Form'
import Chart from './Chart'

import { Box} from '@material-ui/core'

const App = () => {

    return (
        <Box>
            <Header />
            <Box display="flex">
                <Form />
                <Chart />
            </Box>
            
        </Box>
        
    )
}

export default App;