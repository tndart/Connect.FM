import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom';

import LocalSignup from '../user/local-signup'
import LocalLogin from '../user/local-login'
import GoogleLogin from '../user/google-login';

import Container from '../container'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Container className="login-page-container">
                <h4 className="text-center"> Welcome to Connect.FM </h4>
                <h5 className="text-center" style={{color: "orange"}}> Play Music Without Search For It </h5>
                <h6 className="text-center"> Please Login with you Google Account and follow the screens </h6>
                <br/>

                <div className="row">
                    <div className="col mx-auto text-center">
                        <GoogleLogin 
                            socialId="771745660054-cm21cmfhgk3r2485qa0n7vmllonm0hjd.apps.googleusercontent.com"
                            className="btn btn-google"
                            scope="profile"
                            fetchBasicProfile={true}>
                                <i className="fab fa-google"></i> &nbsp;
                                Login With Google
                        </GoogleLogin>
                        <p/>
                    </div>
                </div>
            </Container>
        )
    }
}