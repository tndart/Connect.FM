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
import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

import { attachHistory } from './util/helpers'
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

const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

const history = createBrowserHistory()
attachHistory(history)

class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <MuiThemeProvider theme={theme}>
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

