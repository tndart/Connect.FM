import { fetch } from 'cross-fetch'

// Actions Name
export const GET_NEW_PLAYLIST = 'GET_NEW_PLAYLIST'
export const NEW_PLAYLIST_REQ = 'NEW_PLAYLIST_REQ'
export const NEW_PLAYLIST_RES = 'NEW_PLAYLIST_RES'
export const NEW_PLAYLIST_ERR = 'NEW_PLAYLIST_ERR'

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
        playlist: json.children,
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
    return dispatch => {
        dispatch(getNewPlaylist())
        dispatch(requestNewPlaylist())
        return fetch('http://api.jsonbin.io/b/5a59ca643dd7c64bccaa487f')
            .then(
                response => response.json(), 
                err => {
                    dispatch(errorNewPlaylist(err));
                }
            )
            .then(json => dispatch(receivedNewPlaylist(json)))
    }
}