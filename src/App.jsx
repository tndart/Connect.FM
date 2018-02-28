import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components imports
import NavigationBar from './components/navigation-bar/NavigationBar'
import AppBar from 'material-ui/AppBar'
import { HomePage, GenresPage, ArtistsPage, AboutPage, LoginPage, SignupPage, PlayerPage } from './components/pages'
import './stylesheets/app.css';

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
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavigationBar/>

                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/intro' component={LoginPage}/>
                    <Route exact path='/genres' component={GenresPage}/>
                    <Route exact path='/artists' component={ArtistsPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/user' component={LoginPage}/>
                    <Route exact path='/user/login' component={LoginPage}/>
                    <Route exact path='/user/signup' component={SignupPage}/>
                    <Route exact path='/player' component={PlayerPage}/>
                </Switch>
            </div>
        )
    }
}
