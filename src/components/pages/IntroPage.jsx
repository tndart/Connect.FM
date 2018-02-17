import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LocalSignup from '../user/local-signup'
import LocalLogin from '../user/local-login'
import UserSigninOptions from '../user/user-signin-options'

import Container from '../container'

export default class IntroPage extends Component{
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Container>
                <h4 className="text-center"> Welcome to Connect.FM </h4>
                <h6 className="text-center"> A place that all you need is to PLAY music </h6>
                <br/>
                <Route exact path='/' component={ UserSigninOptions } />
                <Route path='/user/signup' component={ LocalSignup } />
                <Route path='/user/login' component={ LocalLogin } />
            </Container>
        )
    }
}