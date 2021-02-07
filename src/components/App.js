import React from 'react'

import Header from './Header'
import Form from './Form'
import Chart from './Chart'

import {Container} from '@material-ui/core'

const App = () => {

    return (
        <Container>
            <Header />
            <Form />
            <Chart />
        </Container>
        
    )
}

export default App;