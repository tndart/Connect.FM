import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component'; // https://github.com/kennetpostigo/react-google-login-component

/*
{
    !this.state.userLogon && 
    <Container>
            <Login google callback={this.loginCallback}>
            
            </Login>
    </Container>
}
*/

/* UI component only , used for style a basic container in app  */
class Login extends Component {
    constructor(props) {
        super(props);

        this.localStorageUpdated = this.localStorageUpdated.bind(this)

        this.state = {
            status: null
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

    responseGoogle(googleUser) {
        var token = googleUser
            .getAuthResponse()
            .id_token;
        var googleId = googleUser.getId();

        console.log({googleId});
        console.log({accessToken: token});

        localStorage.setItem('googleLoginData', JSON.stringify({googleId, token}));

    }

    googleLogin()
    {
        return (
            <div>
                <GoogleLogin
                    socialId="771745660054-cm21cmfhgk3r2485qa0n7vmllonm0hjd.apps.googleusercontent.com"
                    className="google-login-button"
                    scope="profile"
                    fetchBasicProfile={false}
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google"/>
                    <div>
                        {
                            !this.state.status && this.props.callback()
                        }
                    </div>

            </div>
        );
    }

    render() {
        var googleLogin = null;
        if (this.props.google) {
            googleLogin = this.googleLogin();
        }

        return (
            <div>
                {googleLogin}
            </div>
        )
    }
}

export default Login;
