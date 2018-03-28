
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import LoginPage from './LoginPage'
import PlayerPage from './PlayerPage'

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
                        <PlayerPage/>
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
