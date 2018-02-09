import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import rootReducer from './reducers/index'

import App from './App'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // Helps to async fetching
        loggerMiddleware
    )
)
const history = createBrowserHistory()

class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <MuiThemeProvider>
                        <App/>
                    </MuiThemeProvider>
                </Router>
            </Provider> 
        )
    }
}

ReactDOM.render( 
    <Root/>,
    document.getElementById('root'))

