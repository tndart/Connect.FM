
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect, Switch } from 'react-router-dom'

import Container from '../container'

import GenresPage from './GenresPage'
import IntroPage from './IntroPage'

import LocalSignup from '../user/local-signup'
import LocalLogin from '../user/local-login'
import UserSigninOptions from '../user/user-signin-options'

const LOCAL_SIGNUP = 'LOCAL_SIGNUP'
const GOOGLE_SIGNUP = 'GOOGLE_SIGNUP'
const LOCAL_LOGIN = 'LOCAL_LOGIN'
const DEFAULT = 'DEFAULT'

/* UI component only , used for style a basic container in app  */
class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {

        const ifLoggedIn = () => {
            if (this.props.user.auth && this.props.user.auth.isAuthorized){
                return ( 
                    <Redirect to='/about'/>
                )
            }
            else {
                return ( 
                    <IntroPage/>
                 )
            }
        }

        return (
            <div style={{ position: "relative" , top: "10px" }}>
                { ifLoggedIn() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.user
    
    return {
        user 
    }
}

export default connect(mapStateToProps)(HomePage)
