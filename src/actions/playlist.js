import { fetch } from 'cross-fetch'

const GET_NEW_PLAYLIST = 'FETCH_NEW_PLAYLIST'
const NEW_PLAYLIST_REQ = 'FETCH_NEW_PLAYLIST_REQ'
const NEW_PLAYLIST_RES = 'FETCH_NEW_PLAYLIST_RES'
const NEW_PLAYLIST_ERR = 'FETCH_NEW_PLAYLIST_ERR'

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

function fetchPlaylist(){
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

export const PLAYLIST = {
    getNewPlaylist,
    fetchPlaylist,
    GET_NEW_PLAYLIST,
    NEW_PLAYLIST_REQ,
    NEW_PLAYLIST_RES,
    NEW_PLAYLIST_ERR
};