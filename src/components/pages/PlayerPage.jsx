
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Container from '../container'
import Redirect from 'react-router-dom/Redirect';

/* UI component only , used for style a basic container in app  */
export default class PlayerPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col">
                        <h4>
                            Player page
                        </h4>
                        <Redirect to="/genres"/>
                    </div>
                </div>
            </Container>
        )
    }
}




