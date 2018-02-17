
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Container from '../container'

/* UI component only , used for style a basic container in app  */
export default class AboutPage extends Component {
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
                            Who we are
                        </h4>
                        <div>
                            We are a 5 students from 'Colman - The Collage of Management Academic Studies',<br/>
                            As part of our graduate project, we are trying to let you find your next music
                            without search all over the internet.
                            <br/>All you need is to signup, answer to 3 questions and PLAY for life.<br/>
                            <b>We can assure you - you shouldn't search for a music ever.</b>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}




