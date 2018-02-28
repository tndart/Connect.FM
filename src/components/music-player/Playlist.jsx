import React, {Component} from 'react'
import PropTypes from 'prop-types'

import PlaylistTrack from './PlaylistTrack';

class Playlist extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        var { playlist } = this.props

        return (
            <div className="playlist-container">
                <ul className="playlist-list">
                    { 
                        playlist && 
                        playlist.map((track, index) => {
                            return (
                                <PlaylistTrack key={index} track={track}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

Playlist.propTypes = {
    
}

export default Playlist;
