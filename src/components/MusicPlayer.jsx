import React, {Component} from 'react';
import '../stylesheets/app.css';

class MusicPlayer extends Component {

    constructor(props) {
        super(props);

    }

    isComponentNeeded(components, name) {
        return (components && components.includes(name));
    }

    render() {

        let playButton,
            prevButton,
            nextButton;

        if (this.isComponentNeeded(this.props.components, 'play')) {
            playButton = <button className="playerButton">
                <i className="material-icons">
                    play_arrow
                </i>
            </button>;
        }
        if (this.isComponentNeeded(this.props.components, 'next')) {
            nextButton = <button className="playerButton">
                <i className="material-icons">
                    skip_next
                </i>
            </button>;
        }
        if (this.isComponentNeeded(this.props.components, 'prev')) {
            prevButton = <button className="playerButton">
                <i className="material-icons">
                    skip_previous
                </i>
            </button>;
        }

        return (
            <div className="MPlayer container-fluid">
                <div className="row mx-auto">

                    <div className="col mx-auto" align="center">
                        {prevButton}
                    </div>
                    <div className="col mx-auto" align="center">
                        {playButton}
                    </div>
                    <div className="col mx-auto" align="center">
                        {nextButton}
                    </div>

                    <ul style={{"display":"block",
                        "width": "100%",
                        "color": "white",
                        "listStyle": "none"}}>
                    {
                        this.props.playlist.map((song, index) => {
                            return (
                                <li key={index}> { song.songname } - { song.artist }</li>
                            
                        )})
                    }
                    </ul>

                </div>
            </div>
        )
    }
}

export default MusicPlayer;
