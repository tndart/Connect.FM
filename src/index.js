import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import App from './App'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // Helps 
        loggerMiddleware
    )
);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root'));
