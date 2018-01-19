import { fetch } from 'cross-fetch'

// Consts
const TAGS_TOP_URL = 'http://localhost:8080/tag/top'

// Actions Name
export const GET_TOP_TAGS = 'GET_TOP_TAGS'
export const TAGS_TOP_REQ = 'TAGS_TOP_REQ'
export const TAGS_TOP_RES = 'TAGS_TOP_RES'
export const TAGS_TOP_ERR = 'TAGS_TOP_ERR'

export const TAGS_CHECKING_TOGGLE = 'TAGS_CHECKING_TOGGLE' 

// Actions Creator
function Request(type){
    return {
        type: type
    }
}

function Received(type, json){
    return {
        type: type,
        payload: json,
    }
}

function Error(type, err){
    return {
        type: type,
        error: err,
    }
}

export function getTopTags(){
    return dispatch => {
        dispatch(Request(TAGS_TOP_REQ))
        return fetch(TAGS_TOP_URL)
            .then(
                response => response.json(), 
                err => {
                    dispatch(Error(TAGS_TOP_ERR,err));
                }
            )
            .then(json => dispatch(Received(TAGS_TOP_RES, json)))
    }
}

export function checkingToggle(_id, isChecked) {
    return {
        type: TAGS_CHECKING_TOGGLE,
        _id,
        isChecked
    }
}