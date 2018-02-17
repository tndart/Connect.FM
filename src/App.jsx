import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components imports
import NavigationBar from './components/navigation-bar/navigation-bar'
import HomePage from './components/pages/HomePage'
import GenresPage from './components/pages/GenresPage'
import ArtistsPage from './components/pages/ArtistsPage'
import AboutPage from './components/pages/AboutPage'
import IntroPage from './components/pages/IntroPage';

// Consts Declarations
const appName = 'Connect.FM'
const appMotto = 'Connect Life to Music'
const routes = [
    {
        "name": "1. Who we are",
        "link": "/"
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
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/genres' component={GenresPage}/>
                    <Route path='/artists' component={ArtistsPage}/>
                    <Route path='/user' component={IntroPage}/>
                </Switch>
            </div>
        )
    }
}

/* 
<NavigationBar
    appName={appName}
    appMotto={appMotto}
    routes={routes}/>*/