import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserActions from '../../actions';

import UserIcon from '../user/user-icon'


/* UI component only , used for style a basic container in app  */
class NavbarRightSide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    clickHandler(e) {
        const { dispatch } = this.props
        dispatch(UserActions.logout())
        window.location = '/'
    }

    render() {
        return (
            <div class="dropdown">
                <button class="non-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <UserIcon />
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button"> Preferences </button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" type="button" onClick={ this.clickHandler.bind(this) }> Logout </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state

    return user;
}

export default connect(mapStateToProps)(NavbarRightSide);
