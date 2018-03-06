import React, {Component} from 'react';

import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { Manager, Target, Popper } from 'react-popper';
import AccountCircle from 'material-ui-icons/AccountCircle'
import ClickAwayListener from 'material-ui/utils/ClickAwayListener'

import UserActions from '../../actions'
import Redirect from 'react-router-dom/Redirect';
import { getHistory } from '../../util/helpers'


/* UI component only , used for style a basic container in app  */
class NavbarAccount extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            open: false
        }
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    handleClose = () => {
      if (this.state.open) {

        // setTimeout to ensure a close event comes after a target click event
        this.timeout = setTimeout(() => {
          this.setState({ open: false })
        })
      }
    }

    logoutHandler(e) {
      const { dispatch } = this.props
      dispatch(UserActions.logout())
      this.handleClose()
      getHistory().push('/');
    }

    render() {
        const { open } = this.state
        const { iconPic } = this.props

        return (
            <Manager>
                <Target>
                    { iconPic ? (
                      <button 
                        className="non-button" 
                        aria-owns={open ? 'menu-list' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <img src={iconPic} className="profile-pic"/> 
                      </button>
                    ) : (
                      <IconButton 
                          color="inherit" 
                          aria-owns={open ? 'menu-list' : null}
                          aria-haspopup="true"
                          onClick={this.handleClick}>
                          <AccountCircle />
                      </IconButton>
                    )}
                </Target>
                <Popper
                    placement="bottom-end"
                    eventsEnabled={open}
                    style={ !open ? { pointerEvents: 'none' } : '' } >
                    <ClickAwayListener onClickAway={this.handleClose}>
                    <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                        <Paper>
                            <MenuList role="menu">
                                <MenuItem disabled onClick={this.handleClose}>Preferences</MenuItem>
                                <MenuItem onClick={this.logoutHandler.bind(this)}>Logout</MenuItem>
                            </MenuList>
                        </Paper>
                    </Grow>
                    </ClickAwayListener>
                </Popper>
            </Manager>
        )
    }
}

const mapStateToProps = (state) => {

  let iconPic = undefined

  if (state.user && state.user.data && state.user.data.pic)
    iconPic = state.user.data.pic

  return { iconPic }
}

export default connect(mapStateToProps) (NavbarAccount);
