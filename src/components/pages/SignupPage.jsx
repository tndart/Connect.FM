import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom';

import Container from '../container'
import LocalSignup from '../user/local-signup'
import LocalLogin from '../user/local-login'
import GoogleLogin from '../user/google-login'

export default class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Container className="login-page-container">
                <h4 className="text-center"> Welcome to Connect.FM </h4>
                <h6 className="text-center"> A place that all you need is to PLAY music </h6>
                <br/>

                <LocalSignup/>

                <div className="row">
                    <div className="col mx-auto text-center">
                        <GoogleLogin 
                            socialId="771745660054-cm21cmfhgk3r2485qa0n7vmllonm0hjd.apps.googleusercontent.com"
                            className="btn btn-google"
                            scope="profile"
                            fetchBasicProfile={true}>
                                <i className="fab fa-google"></i> &nbsp;
                                Signup With Google
                        </GoogleLogin>
                        <p/>
                        <Link className="btn btn-primary" to="/user/login">Login</Link>
                    </div>
                </div>
            </Container>
        )
    }
}