
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import GoogleLogin from './google-login'

class UserSigninOptions extends Component{

    constructor(props) {
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className="row">
                <div className="col mx-auto text-center">
                    <Link className="btn btn-primary" to="/user/login">Login</Link>
                    &nbsp; &nbsp;
                    <Link className="btn btn-primary" to="/user/signup">Signup</Link>
                    <br/> <br/>

                    <GoogleLogin 
                        socialId="771745660054-cm21cmfhgk3r2485qa0n7vmllonm0hjd.apps.googleusercontent.com"
                        className="btn btn-google"
                        scope="profile"
                        fetchBasicProfile={true}>
                            <i className="fab fa-google"></i> &nbsp;
                            Login With Google
                    </GoogleLogin>
                </div>
            </div>
        )
    }
}

export default connect(null)(UserSigninOptions)
