import { fetch } from 'cross-fetch'

// Actions Name
export const GET_DEMO = 'GET_DEMO'
export const GET_TOP_ARTISTS_BY_TAGS = 'GET_TOP_ARTISTS_BY_TAGS'
export const TOP_ARTISTS_REQ = 'TOP_ARTISTS_REQ'
export const TOP_ARTISTS_RES = 'TOP_ARTISTS_RES'
export const TOP_ARTISTS_ERR = 'TOP_ARTISTS_ERR'
export const ARTISTS_CHECKING_TOGGLE = 'ARTISTS_CHECKING_TOGGLE'
export const REMOVE_ARTISTS = 'REMOVE_ARTISTS'

export const ARTISTS_BY_TAG_URL = `http://localhost:8080/tag/{tag}/artists`

const artists = [
        {"_id": "1", "name": "Bruno Mars 1", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f", "isChecked": true},
        {"_id": "2", "name": "Bruno Mars 2", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "3", "name": "Bruno Mars 3", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "4", "name": "Bruno Mars 4", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "5", "name": "Bruno Mars 5", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "6", "name": "Bruno Mars 6", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "7", "name": "Bruno Mars 7", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
];

function Request(type, tags, skip, limit) {
    return {
        type,
        q: {
            tags,
            skip,
            limit
        }
    }
}

function Error(type, error) {
    return {
        type,
        error: error.message
    }
}

function Response(type, payload) {
    return {
        type,
        payload
    }
}

export function getTopArtistsByTags(tagsChecked, tagsUnchecked, skip=0, limit=30) {
    return dispatch => {
        dispatch({type: REMOVE_ARTISTS, tagsUnchecked})

        dispatch(Request(TOP_ARTISTS_REQ, tagsChecked, skip, limit))
        
        var artists = []
        var index = 0;
        tagsChecked.forEach(tag => {
            fetch(ARTISTS_BY_TAG_URL.replace('{tag}', tag.name)).then(response => response.json(), 
            err => {
                dispatch(Error(TOP_ARTISTS_ERR,err));
            }).then((json) => {
                index++;
                if (json) {
                    artists = artists.concat(json);
                }

                if(index >= tagsChecked.length) {
                    return dispatch(Response(TOP_ARTISTS_RES, artists));
                }
            })
        });

    }
}

/* return dispatch => {
        dispatch(Request(TAGS_TOP_REQ))
        return fetch(TAGS_TOP_URL)
            .then(
                response => response.json(), 
                err => {
                    dispatch(Error(TAGS_TOP_ERR,err));
                }
            )
            .then(json => dispatch(Received(TAGS_TOP_RES, json)))
    }*/

// Action Creators
export function getDemo(){
    return {
        type: GET_DEMO,
        payload: artists
    }
}

export function checkingToggle(_id, isChecked) {
    return {
        type: ARTISTS_CHECKING_TOGGLE,
        _id,
        isChecked
    }
}
