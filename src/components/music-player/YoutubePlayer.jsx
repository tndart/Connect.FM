/* global YT */


import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import YouTubePlayer from 'youtube-player'

const PlayerStates = {
    BUFFERING: 3,
    ENDED: 0,
    PAUSED: 2,
    PLAYING: 1,
    UNSTARTED: -1,
    VIDEO_CUED: 5
  };


class YoutubePlayer extends Component {
    constructor(props) {
        super(props);

        this.state = { }

        this.player = null;
    }

    componentDidMount() {
        const width = document.body.clientWidth * 0.7
        this.player = YouTubePlayer('player', { width: width } )
        if (this.props.currentVideo){
            this.player.loadVideoById(this.props.currentVideo)
        }

        this.player.on('stateChange', this.stateChangedHandler.bind(this))
    }

    stateChangedHandler(event){
        switch (event.data) {
            case PlayerStates.ENDED:
                this.props.onEndedVideo()
                break;
            default:
                break;
        }  
            
        console.log('State: ' + ' (' + event.data + ').');
    }

    componentWillUpdate(nextProps, nextState){
        if (nextProps.currentVideo && nextProps.currentVideo !== this.props.currentVideo){
            this.player.loadVideoById(nextProps.currentVideo)
        }

        if (this.props.play !== nextProps.play){
            if (nextProps.play){
                this.player.playVideo()
            } else {
                this.player.pauseVideo()
            }
        }
    }


    render() {
        const { children } = this.props

        return (
            <div className='youtube-container'>
                <div id='player'>Youtube Player Loading...</div>
            </div>
        )
    }
}

YoutubePlayer.propTypes = {
    
}

export default YoutubePlayer;


/*
 ((id, callback) => {
            let js, gs = document.getElementsByTagName('script')[0];
            if (!document.getElementById(id)) { 
                js = document.createElement('script'); 
                js.id = id;
                js.src = "https://www.youtube.com/iframe_api";
                gs.parentNode.insertBefore(js, gs);
                js.onload = callback;
            }

        })( 'youtube-player', () => {
            this.setState({ 
                player: YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: 'M7lc1UVf-VE',
                    events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                    }
              })})
        });*/