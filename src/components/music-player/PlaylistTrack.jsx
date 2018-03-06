import React, {Component} from 'react'
import PropTypes from 'prop-types'

import PlayerAction from './PlayerAction'

class PlaylistTrack extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        let { track } = this.props

        return (
            <li className="playlist-track">
                { track.artist } - { track.songname } 
            </li>
        )
    }
}

PlaylistTrack.propTypes = {
    track: PropTypes.shape({
        songname: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        pic: PropTypes.string
    }).isRequired
}

export default PlaylistTrack;
