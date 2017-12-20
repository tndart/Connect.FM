import React, {Component} from 'react';
import './MusicPlayer.css';

class MusicPlayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            components: props.components,
            playlist: []
        };

    }

    isComponentNeeded(components, name) {
        return (components && components.includes(name));
    }

    render() {

        let playButton,
            prevButton,
            nextButton;

        if (this.isComponentNeeded(this.state.components, 'play')) {
            playButton = <button className="playerButton">
                <i className="material-icons">
                    play_arrow
                </i>
            </button>;
        }
        if (this.isComponentNeeded(this.state.components, 'next')) {
            nextButton = <button className="playerButton">
                <i className="material-icons">
                    skip_next
                </i>
            </button>;
        }
        if (this.isComponentNeeded(this.state.components, 'prev')) {
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

                </div>
            </div>
        )
    }
}

export default MusicPlayer;
