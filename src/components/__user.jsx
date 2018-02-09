
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import Container from './container'
import LocalSignup from './user/local-signup'
import LocalLogin from './user/local-login'
import UserSigninOptions from './user/user-signin-options'

const LOCAL_SIGNUP = 'LOCAL_SIGNUP'
const GOOGLE_SIGNUP = 'GOOGLE_SIGNUP'
const LOCAL_LOGIN = 'LOCAL_LOGIN'
const DEFAULT = 'DEFAULT'

/* UI component only , used for style a basic container in app  */
class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {

        const ifLoggedIn = () => {
            if (this.props.user.auth && this.props.user.auth.isAuthorized){
                return (<Redirect to='/genres'/>)
            }
        }

        return (
            <Container>
                { ifLoggedIn() }
                <h4> Join Us </h4>
                <br/>
                <Route exact path={this.props.match.path} component={UserSigninOptions} />
                <Route path={`${this.props.match.path}/signup`} component={LocalSignup} />
                <Route path={`${this.props.match.path}/login`} component={LocalLogin} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.user
    
    return {
        user 
    }
}

export default connect(mapStateToProps)(UserPage)
