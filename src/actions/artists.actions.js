import { fetch } from 'cross-fetch'
import { APIActions } from './api.actions';
import * as Helpers from '../util/helpers';

// Actions Name
export const GET_DEMO = 'GET_DEMO'
export const GET_TOP_ARTISTS_BY_TAGS = 'GET_TOP_ARTISTS_BY_TAGS'
export const TOP_ARTISTS_REQ = 'TOP_ARTISTS_REQ'
export const TOP_ARTISTS_RES = 'TOP_ARTISTS_RES'
export const TOP_ARTISTS_ERR = 'TOP_ARTISTS_ERR'
export const ARTISTS_CHECKING_TOGGLE = 'ARTISTS_CHECKING_TOGGLE'
export const REMOVE_FROM_TOPARTISTS = 'REMOVE_FROM_TOPARTISTS'

const Host = Helpers.config.ServerHost;
export const ARTISTS_BY_TAG_URL = `http://${Host}/tag/{tag}/artists`

function Request(dispatch, tag, skip, limit){
    dispatch({type: TOP_ARTISTS_REQ}) // event

    const onSuccess = (data) => {
        dispatch({ 
            type: TOP_ARTISTS_RES,
            payload: data 
        })
    }

    const onFailure = (error) => {
        dispatch({ 
            type: TOP_ARTISTS_ERR,
            payload: error 
        })
    }

   return APIActions.get("Artist", ARTISTS_BY_TAG_URL.replace('{tag}', tag.name), onSuccess, onFailure)
}

export function getTopArtistsByTags(skip=0, limit=100) {
    return (dispatch, getState) => {
        const tagsChecked = getState().tags.topTags.filter(tag => tag.isChecked === true)
        if (tagsChecked && tagsChecked.length > 0) {
            tagsChecked.forEach(tag => {
                dispatch(Request(dispatch, tag, skip, limit))
            })
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


/*// remove artists that unchecked.
        // if (not checked yet) Get top artists of tags that checked from API.
        let artists = []
        let index = 0
        const allArtists  = getState().artists.list
        const tagsChecked = getState().tags.topTags.filter(tag => tag.isChecked === true)

        if (tagsChecked && tagsChecked.length > 0) {
            tagsChecked.forEach(tag => {
                const list = allArtists.filter(artist => artist. stags.filter(artistTag => artistTag.name === tag.name).length > 0)
                
                if(!list || list.length < limit) {      
                    dispatch(Request(TOP_ARTISTS_REQ, tagsChecked, skip, limit))

                    fetch(ARTISTS_BY_TAG_URL.replace('{tag}', tag.name))
                    .then(
                        response => response.json(), 
                        err => {
                            dispatch({ 
                                type: TOP_ARTISTS_ERR,
                                payload: err
                            })
                        })
                        .then(json => {
                            if (json) {
                                artists = artists.concat(json)
                            }
                            index++;

                            if(index >= tagsChecked.length) {
                                return dispatch({ 
                                    type: TOP_ARTISTS_RES,
                                    payload: artists 
                                })
                            }
                        })
                }
                else {
                    index++;
                }
            });*/