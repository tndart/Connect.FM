
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';

import Container from '../container'
import MusicPlayer from '../music-player/MusicPlayer'

export default class PlayerPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { playlist } = this.props

        return (
            <Container>
                <div className="row">
                    <div className="col" align="center">
                        <MusicPlayer/>
                    </div>
                </div>
            </Container>
        )
    }
}





