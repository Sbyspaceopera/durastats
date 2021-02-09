import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App'

import theme from "./components/styles/theme"

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </ThemeProvider>
    
    , 
    document.querySelector("#root")
)