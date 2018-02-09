
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class UserSigninOptions extends Component{

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col mx-auto text-center">
                    <Link className="btn btn-primary" to="/user/login">Login</Link>
                    &nbsp; &nbsp;
                    <Link className="btn btn-primary" to="/user/signup">Signup</Link>
                    <br/> <br/>
                    <button className="btn btn-google disabled" onClick={() => {}/*this.setState({stage: GOOGLE_SIGNUP})*/}> 
                        <i className="fab fa-google"></i> &nbsp;
                        Signup By Google (SOON)
                    </button> 
                </div>
            </div>
        )
    }
}

export default connect(null)(UserSigninOptions)
