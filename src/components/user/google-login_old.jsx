/* global gapi */

import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component'; // https://github.com/kennetpostigo/react-google-login-component

/*
{
    !this.state.userLogon && 
    <Container>
            
    </Container>
}
*/

/* UI component only , used for style a basic container in app  */
class CustomGoogleLogin extends Component {
    constructor(props) {
        super(props);

        this.localStorageUpdated = this.localStorageUpdated.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onLoadHandler = this.onLoadHandler.bind(this)

        this.state = {
            status: null,
            disabled: true
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setState({status: localStorage.getItem('googleLoginData') ? true : false})

            window.addEventListener('storage', this.localStorageUpdated)
        }
    }

    componentWillUnmount(){
        if (typeof window !== 'undefined') {
            window.removeEventListener('storage', this.localStorageUpdated)
        }
    }

    localStorageUpdated(){

        console.log('local storage updated');
        if (!localStorage.getItem('googleLoginData')) {
            this.updateState(false)
        } 
        else if (!this.state.status) {
            this.updateState(true)
        }

    }

    updateState(value){
        this.setState({status:value})
    }

    responseGoogle(googleUser, profile) {
        let token = googleUser
            .getAuthResponse()
            .id_token;
        let googleId = googleUser.getId();

        console.log({googleId});
        console.log({accessToken: token});

        localStorage.setItem('googleLoginData', JSON.stringify({googleId, token}));

    }

    onLoadHandler(){
        const { socialId, scope, fetchBasicProfile } = this.props;

        gapi.load('auth2', () => {
            this.setState({
              disabled: false
            });
            if (!gapi.auth2.getAuthInstance()) {
              gapi.auth2.init({
                client_id: socialId,
                fetch_basic_profile: fetchBasicProfile,
                scope: scope
              });
            }
        })
    }

    onClickHandler(){
        alert("gapi? " + gapi)
    }

    render() {

        return (
            <div>
                
                <button className="btn btn-google" onClick={this.onClickHandler}>
                    <i className="fab fa-google"></i> &nbsp;
                    Signup By Google (SOON)
                </button>

                <script id="google-platform" src="https://apis.google.com/js/platform.js" onLoad={this.onLoadHandler}/>

            </div>
        )
    }
}

export default CustomGoogleLogin;

/*
socialId="771745660054-cm21cmfhgk3r2485qa0n7vmllonm0hjd.apps.googleusercontent.com"
className="btn btn-google"
scope="profile"
fetchBasicProfile={false}
responseHandler={this.responseGoogle}
buttonText="Login With Google">
*/