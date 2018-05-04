import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Router, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { ApiMiddleware } from './middlewares/ApiMiddleware';
import { MetaInfoMiddleware } from './middlewares/MetaInfoMiddleware';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

import { attachHistory, attachStore } from './util/helpers'
import rootReducer from './reducers/index'
import App from './App'

const loggerMiddleware = createLogger()
const store = createStore (
    rootReducer,
    applyMiddleware(
        MetaInfoMiddleware,
        thunkMiddleware, // Helps to async fetching
        loggerMiddleware,
        ApiMiddleware,
    )
)
attachStore(store)

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
                <HashRouter history={history}>
                    <MuiThemeProvider theme={theme}>
                        <App/>
                    </MuiThemeProvider>
                </HashRouter>
            </Provider> 
        )
    }
}

ReactDOM.render( 
    <Root/>,
    document.getElementById('root'))

