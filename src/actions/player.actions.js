import { getStore } from '../util/helpers'

const PLAY = "PLAY"
const PAUSE = "PAUSE"
const NEXT_SONG = "NEXT_SONG"
const FIRST_PLAY = "FIRST_PLAY"
const FIRST_PLAY_FINISHED = "FIRST_PLAY_FINISHED"

export const PlayerActions = {
    PLAY,
    PAUSE,
    NEXT_SONG,
    FIRST_PLAY,
    FIRST_PLAY_FINISHED,
    
    play,
    pause,
    next
}

let unsubscribe;

function firstPlay(){
    return new Promise(resolve => {
            const store = getStore();
            unsubscribe = store.subscribe(handleChange)
    
            function handleChange(){
                const state = store.getState();
    
                if (state.playlist && state.playlist.playlist && state.playlist.playlist.length > 0){
                    unsubscribe()

                    const cursorIndex = 0;
                    const currVideo = state.playlist.playlist[cursorIndex];

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