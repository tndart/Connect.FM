/* global gapi */
/* global auth2 */

import React from 'react';
import { connect } from 'react-redux';

import UserActions from '../../actions'

class GoogleLogin extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            disabled: true
        };
        
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        const { socialId, scope, fetchBasicProfile } = this.props;
        
        // Inject the google platform script into html document
        // and init the gapi.auth2
        ((d, s, id, callback) => {
        
            let js, gs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { 
                this.setState({
                disabled: false
                });
            } else {
                js = d.createElement(s); 
                js.id = id;
                js.src = 'https://apis.google.com/js/platform.js';
                gs.parentNode.insertBefore(js, gs);
                js.onload = callback;
            }
        })(document, 'script', 'google-platform', () => {
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
            });
        });
    }

    clickHandler () {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then( googleUser => this.props.dispatch(UserActions.loginOrSignupByGoogle(googleUser)) )
    }

    render () {
        const { children, className } = this.props;

        return (
            <button className={'' + className} onClick={this.clickHandler}>
                {children}
            </button>
        )
    }
}

GoogleLogin.defaultProps = {
    fetchBasicProfile: true,
    scope: 'profile'
}

export default connect(null)(GoogleLogin);
