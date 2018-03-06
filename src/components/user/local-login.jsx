import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import UserActions from '../../actions'
import { getHistory } from '../../util/helpers'

/* UI component only , used for style a basic container in app  */
class LocalLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.ifLoggedIn = this.ifLoggedIn.bind(this)

    }

    ifLoggedIn() {
        if (this.props.auth && this.props.auth.isAuthorized){
            return (<Redirect to='/genres'/>)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        let user = {
            data: { username : e.target.username.value },
            auth: { local: { password : e.target.password.value } }
        }
        
        dispatch(UserActions.login(user))
    }

    render() {
        return (
            <div className={' ' + this.props.className}>
                { this.ifLoggedIn() }            
                <h4>Login</h4>

                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="row mx-auto">
                        <div className="col">
                            <label htmlFor="username" className="col-form-label"> User Name </label>
                            <input id="username" className="form-control" type="text" placeholder="Username from your registration"/>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col">
                            <label htmlFor="password" className="col-form-label"> Password </label>
                            <input id="password" className="form-control" type="password" placeholder="your password" />
                        </div>
                    </div>
                    <div className="row mx-auto" style={{ marginTop: "20px" }}>
                        <div className="col">
                            <button className="btn btn-primary" onClick={ getHistory().goBack }>Back</button>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary float-right">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { auth } = state.user
    
    return {
        auth 
    }
}

export default connect(mapStateToProps)(LocalLogin);




