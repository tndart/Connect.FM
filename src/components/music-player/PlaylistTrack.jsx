import React, {Component} from 'react'
import PropTypes from 'prop-types'

import PlayerAction from './PlayerAction'

class PlaylistTrack extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        const { track } = this.props

        return (
            <li className="playlist-track">
                { track.name } 
            </li>
        )
    }
}

PlaylistTrack.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string.isRequired,
        youtubeId: PropTypes.string.isRequired,
    }).isRequired
}

export default PlaylistTrack;
