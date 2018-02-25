import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'

import NavbarAccount from './NavbarAccount';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
                
    }
    

    render() {
        const { auth } = this.props

        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flex: "1"}}>
                        Connect.FM
                    </Typography>

                    { 
                        auth && auth.isAuthorized && 
                        <NavbarAccount/>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
    const { auth } = state.user
    
    return { auth }
}

export default connect(mapStateToProps)(NavigationBar);
