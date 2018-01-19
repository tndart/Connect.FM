import { fetch } from 'cross-fetch'

// Actions Name
export const GET_DEMO = 'GET_DEMO'
export const TOP_ARTISTS_REQ = 'TOP_ARTISTS_REQ'
export const TOP_ARTISTS_RES = 'TOP_ARTISTS_RES'
export const TOP_ARTISTS_ERR = 'TOP_ARTISTS_ERR'
export const ARTISTS_CHECKING_TOGGLE = 'ARTISTS_CHECKING_TOGGLE'

const artists = [
        {"_id": "1", "name": "Bruno Mars 1", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f", "isChecked": true},
        {"_id": "2", "name": "Bruno Mars 2", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "3", "name": "Bruno Mars 3", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "4", "name": "Bruno Mars 4", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "5", "name": "Bruno Mars 5", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "6", "name": "Bruno Mars 6", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
        {"_id": "7", "name": "Bruno Mars 7", "src": "https://i.scdn.co/image/500cdc11764fcce21eaaa543b37cc83f043f038f"},
];

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
