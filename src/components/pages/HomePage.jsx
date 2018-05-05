
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import LoginPage from './LoginPage'
import PlayerPage from './PlayerPage'
import AboutPage from './AboutPage'
import GenresPage from './GenresPage'

/* UI component only , used for style a basic container in app  */
class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        
    }

    render() {
        const { user } = this.props

        return (
            <div>
                {
                    user && user.auth && user.auth.isAuthorized ?
                        ( user.preferences && user.preferences.genres && user.preferences.genres.length > 0 ? 
                            <PlayerPage/> : <GenresPage/> )
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
