import { fetch } from 'cross-fetch'
import { APIActions } from './api.actions';

// Actions Name
export const GET_NEW_PLAYLIST = 'GET_NEW_PLAYLIST'
export const NEW_PLAYLIST_REQ = 'NEW_PLAYLIST_REQ'
export const NEW_PLAYLIST_RES = 'NEW_PLAYLIST_RES'
export const NEW_PLAYLIST_ERR = 'NEW_PLAYLIST_ERR'

const GET_NEXT_PLAYLIST_URL = 'http://localhost:8080/playlist/getnext?userid={userid}&amount={MAX_RESULTS}'
const MAX_RESULTS = 10;

// Action Creators
function getNewPlaylist(){
    return {
        type: GET_NEW_PLAYLIST
    }
}

function requestNewPlaylist(){
    return{
        type: NEW_PLAYLIST_REQ
    }
}

function receivedNewPlaylist(json){
    return {
        type: NEW_PLAYLIST_RES,
        playlist: json,
        receivedAt: Date.now()
    }
}

function errorNewPlaylist(err){
    return {
        type: NEW_PLAYLIST_ERR,
        error: err,
        receivedAt: Date.now()
    }
}

export function fetchPlaylist(){
    return (dispatch, getState) => {
        dispatch({type: NEW_PLAYLIST_REQ}) // event

        const onSuccess = (data) => {
            dispatch({ 
                type: NEW_PLAYLIST_RES,
                payload: data 
            })
        }
    
        const onFailure = (error) => {
            dispatch({ 
                type: NEW_PLAYLIST_ERR,
                payload: error 
            })
        }
        
        const URL = GET_NEXT_PLAYLIST_URL.replace('{userid}', getState().user._id).replace('{MAX_RESULTS}', MAX_RESULTS)

        return dispatch(APIActions.get("Playlist", URL , onSuccess, onFailure))
    }
}