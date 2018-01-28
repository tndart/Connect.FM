import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/index'

import GenresPage from './components/__genres';
import ArtistsPage from './components/__artists';

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
                    <App/>
                </Router>
            </Provider> 
        )
    }
}

ReactDOM.render( 
    <Root/>,
    document.getElementById('root'))

