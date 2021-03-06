import { APIActions } from './api.actions';
import * as Helpers from '../util/helpers';

const PLAY = "PLAY"
const PAUSE = "PAUSE"
const NEXT_SONG = "NEXT_SONG"
const FIRST_PLAY = "FIRST_PLAY"
const FIRST_PLAY_FINISHED = "FIRST_PLAY_FINISHED"
const SONG_ENDED = "SONG_ENDED"

const Host = Helpers.config.ServerHost;
export const SAVE_EVENT = `${Host}/history/saveEvent`

export const PlayerActions = {
    PLAY,
    PAUSE,
    NEXT_SONG,
    FIRST_PLAY,
    FIRST_PLAY_FINISHED,
    
    play,
    pause,
    next,
    songEnded
}

let unsubscribe;

function firstPlay(){
    return new Promise(resolve => {
        const store = Helpers.getStore();
        unsubscribe = store.subscribe(handleChange)

        function handleChange(){
            const state = store.getState();

            if (state.playlist && state.playlist.playlist && state.playlist.playlist.length > 0){
                unsubscribe()

                const cursorIndex = 0;
                const currVideo = state.playlist.playlist[cursorIndex]

                resolve({
                    type: FIRST_PLAY_FINISHED, 
                    payload: { cursorIndex, currVideo }
                })
            }
        }
    })
}

function play(){
    return (dispatch, getState) => {
        const state = getState();

        if (state.player.cursorIndex === -1){
            return firstPlay().then(action => dispatch(action))
        }

        return dispatch({
            type: PLAY,
            payload: {}
        })
    }
}

function pause(){
    return {
        type: PAUSE,
        payload: {}
    }
}

function next() {
    return (dispatch, getState) => {
        console.log("next")
        const state = getState();
        const playlist = state.playlist.playlist
        const cursorIndex = state.player.cursorIndex + 1 

        if (playlist && playlist.length > cursorIndex){
            const currVideo = playlist[cursorIndex]

            dispatch({
                type: NEXT_SONG, 
                payload: {
                    cursorIndex,
                    currVideo
                }
            })
        }

    }
}

function songEnded(currentTime, duration){
    return (dispatch, getState) => {
        
        const state = getState();
        const playlist = state.playlist.playlist
        const cursorIndex = state.player.cursorIndex
        const currentSong = playlist[cursorIndex];

        const payload = {
            event: NEXT_SONG,
            category: "Player",
            songName: currentSong.name,
            songId: currentSong.songId,
            durationPrecentage: Math.floor(currentTime / duration * 100),
            userId: state.user._id,
        }

        const onSuccess = (data) => {
            console.log(data)
        }
    
        const onFailure = (error) => {
            console.log(error)
        }
    
        if (payload.songId && (payload.durationPrecentage || payload.durationPrecentage === 0) && payload.userId) {
            dispatch(APIActions.post("History", SAVE_EVENT, onSuccess, onFailure, payload))
        }
        else {
            console.error(`Cannot send History event of ${NEXT_SONG} due to missing data. 
                songId: '${payload.songId}', duration: '${payload.durationPrecentage}'
                userId: '${state.user._id}' `)
        }
    }
}