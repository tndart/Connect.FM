import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components imports
import NavigationBar from './components/navigation-bar/navigation-bar'
import HomePage from './components/pages/HomePage'
import GenresPage from './components/pages/GenresPage'
import ArtistsPage from './components/pages/ArtistsPage'
import AboutPage from './components/pages/AboutPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage';

// Consts Declarations
const appName = 'Connect.FM'
const appMotto = 'Connect Life to Music'
const routes = [
    {
        "name": "1. Who we are",
        "link": "/about"
    }, {
        "name": "2. Login",
        "link": "/user"
    }, {
        "name": "3. Select your music",
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
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/intro' component={LoginPage}/>
                    <Route exact path='/genres' component={GenresPage}/>
                    <Route exact path='/artists' component={ArtistsPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/user' component={LoginPage}/>
                    <Route exact path='/user/login' component={LoginPage}/>
                    <Route exact path='/user/signup' component={SignupPage}/>
                </Switch>
            </div>
        )
    }
}

