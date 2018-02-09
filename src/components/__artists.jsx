

import React, { Component } from 'react'
import Link from 'react-router-dom/Link'

import Container from './container'
import { ArtistPicker } from './collection/index';

/* UI component only , used for style a basic container in app  */
class ArtistsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <Container>
                <div className="row">
                    <div className="col">
                        <Link style={{float: "left"}} className="btn btn-primary" to="/genres"> Back </Link>
                    </div>
                    <div className="col align-self-center">
                    <h4 style={{textAlign: "center"}}> Artists: </h4>
                    <br/>
                    </div>
                    <div className="col">
                        <Link style={{float: "right"}} className="btn btn-primary" to="/player"> Proceed </Link>
                    </div>
                </div>
                <div className="row">         
                        <div className="col">         
                            <ArtistPicker></ArtistPicker>
                        </div>
                    </div>
            </Container>
        )
    }
}

export default ArtistsPage




