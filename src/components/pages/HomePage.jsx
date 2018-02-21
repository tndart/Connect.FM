
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Container from '../container'

import GenresPage from './GenresPage'
import LoginPage from './LoginPage'

import LocalSignup from '../user/local-signup'
import LocalLogin from '../user/local-login'

const LOCAL_SIGNUP = 'LOCAL_SIGNUP'
const GOOGLE_SIGNUP = 'GOOGLE_SIGNUP'
const LOCAL_LOGIN = 'LOCAL_LOGIN'
const DEFAULT = 'DEFAULT'

/* UI component only , used for style a basic container in app  */
class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                {
                    this.props.user.auth && this.props.user.auth.isAuthorized ?
                        <Redirect to='/player'/> 
                        : 
                        <LoginPage/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    
    return {
        user 
    }
}

export default connect(mapStateToProps)(HomePage)
