import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components imports
import NavigationBar from './components/navigation-bar/navigation-bar'
import LoginPage from './components/login'
import GenresPage from './components/__genres'
import ArtistsPage from './components/__artists'
import AboutPage from './components/__about'

// Consts Declarations
const appName = 'Connect.FM'
const appMotto = 'Connect Life to Music'
const routes = [
    {
        "name": "1. Who we are",
        "link": "/"
    }, {
        "name": "Login",
        "link": "/login"
    }, {
        "name": "2. Select your music",
        "link": "/genres"
    }, {
        "name": "Contact",
        "link": "/about"
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogon: null,
        };
    }

    loginCallback(){
        console.log("callback " + JSON.parse(localStorage.getItem('googleLoginData')));
    }

    render() {

        return (
            <div>
                <NavigationBar
                    appName={appName}
                    appMotto={appMotto}
                    routes={routes}/>
                    
                <Switch>
                    <Route exact path='/' component={AboutPage}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/genres' component={GenresPage}/>
                    <Route path='/artists' component={ArtistsPage}/>
                </Switch>
               
                
            </div>
        )
    }
}

