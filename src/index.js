import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

import App from './components/App'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const theme = createMuiTheme({
    palette: {
        type: 'light',
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    
    , 
    document.querySelector("#root")
)