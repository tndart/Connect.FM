
import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserIcon extends Component{

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render(){
        const { user } = this.props

        function renderByLoginState(){
            if (user && user.auth && user.auth.isAuthorized) {
                return ( <img className="user-profile-pic" src={user.data.pic}/> )
            }
            else{
                return ( <i className="fas fa-user-circle fa-2x"></i> )
            }
        }


        return (
            <div>
               { renderByLoginState() }
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

export default connect(mapStateToProps)(UserIcon)
