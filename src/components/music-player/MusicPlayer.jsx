import React, {Component} from 'react'
import { connect } from 'react-redux'

import PlayArrow from 'material-ui-icons/PlayArrow'
import SkipPrevious from 'material-ui-icons/SkipPrevious'
import SkipNext from 'material-ui-icons/SkipNext'

import Actions from '../../actions'

import Container from '../container';
import YoutubePlayer from './YoutubePlayer';
import Playlist from './Playlist'
import PlayerActionBar from './PlayerActionBar'
import PlayerAction from './PlayerAction'

class MusicPlayer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            play: false,
            currVideo: ""
        }

        this.onEndedVideo = this.onEndedVideo.bind(this)
    }    

    componentWillMount(){
        this.props.fetchPlaylist()
    }

    componentDidMount() {
        this.props.play()
    }

/*    componentDidUpdate(prevProps, prevState){
        if (this.props.cursorIndex !== prevProps.cursorIndex || this.props.playlist !== prevProps.playlist){
            if (this.props.playlist && this.props.playlist.length > this.props.cursorIndex){
                /*this.setState({
                    currVideo: this.props.playlist[this.props.cursorIndex].youtubeVideoID
                })
            }
        }
    }*/

    nextHandler(e){
        this.props.next()
    }

    onEndedVideo(e){
        this.nextHandler(e)
    }

    play_pause(e){
        const { play, pause } = this.props
       
        if(!this.props.isPlaying){
            play();
        }
        else{
            pause();
        }
    }

    render() {
        const { isPlaying, playlist, currVideo, cursorIndex } = this.props

        return (
            <div>
                <div>
                    { 
                        currVideo && currVideo.youtubeVideoID && 
                        <YoutubePlayer 
                            currentVideo = { currVideo.youtubeVideoID } 
                            play = { isPlaying }
                            onEndedVideo = { this.onEndedVideo }/>
                    }
                </div>
                <div>
                    <PlayerActionBar>
                        <PlayerAction onClick={() =>  {  } }> 
                            <SkipPrevious/>
                        </PlayerAction>
                        <PlayerAction onClick={ this.play_pause.bind(this) }> 
                            <PlayArrow/>
                        </PlayerAction>
                        <PlayerAction onClick={ this.nextHandler.bind(this) }> 
                            <SkipNext/>
                        </PlayerAction>
                    </PlayerActionBar>
                </div>
                <div>
                    <Playlist playlist={ playlist } cursor={ cursorIndex }>
                    </Playlist>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { playlist } = state.playlist
    const { cursorIndex, currVideo, isPlaying } = state.player
    
    return {
        playlist,
        cursorIndex,
        currVideo,
        isPlaying
    }
}

function mapDispatchToProps(dispatch){
    return { 
        fetchPlaylist: () => dispatch(Actions.fetchPlaylist()) , 
        play: () => dispatch(Actions.play()),
        pause: () => dispatch(Actions.pause()),
        next: () => dispatch(Actions.next())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);

