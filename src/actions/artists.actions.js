import { fetch } from 'cross-fetch'

// Actions Name
export const GET_DEMO = 'GET_DEMO'
export const GET_TOP_ARTISTS_BY_TAGS = 'GET_TOP_ARTISTS_BY_TAGS'
export const TOP_ARTISTS_REQ = 'TOP_ARTISTS_REQ'
export const TOP_ARTISTS_RES = 'TOP_ARTISTS_RES'
export const TOP_ARTISTS_ERR = 'TOP_ARTISTS_ERR'
export const ARTISTS_CHECKING_TOGGLE = 'ARTISTS_CHECKING_TOGGLE'
export const REMOVE_FROM_TOPARTISTS = 'REMOVE_FROM_TOPARTISTS'

export const ARTISTS_BY_TAG_URL = `http://localhost:8080/tag/{tag}/artists`

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

export function getTopArtistsByTags(skip=0, limit=30) {
    return (dispatch, getState) => {

        // remove artists that unchecked.
        // if (not checked yet) Get top artists of tags that checked from API.
        let artists = []
        let index = 0
        const allArtists  = getState().artists.list
        const tagsChecked = getState().tags.topTags.filter(tag => tag.isChecked === true)

        if (tagsChecked && tagsChecked.length > 0) {
            tagsChecked.forEach(tag => {
                const list = allArtists.filter(artist => artist.tags.filter(artistTag => artistTag.name === tag.name).length > 0)
                
                if(!list || list.length < limit) {      
                    dispatch(Request(TOP_ARTISTS_REQ, tagsChecked, skip, limit))

                    fetch(ARTISTS_BY_TAG_URL.replace('{tag}', tag.name))
                    .then(
                        response => response.json(), 
                        err => {
                            dispatch(Error(TOP_ARTISTS_ERR,err))
                        })
                        .then(json => {
                            if (json) {
                                artists = artists.concat(json)
                            }
                            index++;

                            if(index >= tagsChecked.length) {
                                return dispatch(Response(TOP_ARTISTS_RES, artists))
                            }
                        })
                }
                else {
                    index++;
                }
            });
        }
    }
}

export function checkingToggle(_id, isChecked) {
    return {
        type: ARTISTS_CHECKING_TOGGLE,
        _id,
        isChecked
    }
}
