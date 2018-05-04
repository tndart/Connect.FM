import { fetch } from 'cross-fetch'
import { APIActions } from './api.actions';
import * as Helpers from '../../util/helpers';

// Consts
const Host = Helpers.config.ServerHost;
const TAGS_TOP_URL = `http://${Host}/tag/top`

// Actions Name
export const GET_TOP_TAGS = 'GET_TOP_TAGS'
export const TAGS_TOP_REQ = 'TAGS_TOP_REQ'
export const TAGS_TOP_RES = 'TAGS_TOP_RES'
export const TAGS_TOP_ERR = 'TAGS_TOP_ERR'

export const TAGS_CHECKING_TOGGLE = 'TAGS_CHECKING_TOGGLE' 

// Action creator
export function getTopTags(){
    return dispatch => {
        dispatch( { type: TAGS_TOP_REQ } )

        const onSuccess = (data) => {
            dispatch({ 
                type: TAGS_TOP_RES,
                payload: data 
            })
        }

        const onFailure = (error) => {
            dispatch({ 
                type: TAGS_TOP_ERR,
                payload: error 
            })
        }

        dispatch( APIActions.get("Tags", TAGS_TOP_URL, onSuccess, onFailure) )
    }
}

export function checkingToggle(_id, isChecked) {
    return {
        type: TAGS_CHECKING_TOGGLE,
        _id,
        isChecked
    }
}