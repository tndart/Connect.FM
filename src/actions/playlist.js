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
    return dispatch => {
        setTimeout(() => {


        dispatch(getNewPlaylist())
        dispatch(requestNewPlaylist())
        return fetch('https://api.jsonbin.io/b/5a9536b273fb541c61a5893d')
            .then(
                response => response.json(), 
                err => {
                    dispatch(errorNewPlaylist(err));
                }
            )
            .then(json => {
                if (json instanceof Array){
                    var regexp = new RegExp(/\b.*=(.*)/)

                    var promises = json.map(track => {
                        return new Promise(resolve => {
                            track.youtubeVideoID = regexp.exec(track.url)[1]
                            resolve()
                        })
                    })
                    
                    Promise.all(promises).then(() => {
                        dispatch(receivedNewPlaylist(json))
                    })
                }
                
            })
        }, 3000)
    }
}