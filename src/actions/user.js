import { fetch } from 'cross-fetch'

const SIGNUP_ENDPOINT = 'http://localhost:8080/user/signup'
const LOGIN_ENDPOINT = 'http://localhost:8080/user/login'

// Actions
export const SIGNUP_LOCAL = 'SIGNUP_LOCAL'
export const LOGIN_LOCAL = 'LOGIN_LOCAL'

function actionCreator(type, payload){
    return {
        type: type,
        payload: payload
    }
}

// Action creators
export function signup(user){
    return dispatch => {
        if(inputValidation(user)){
            return fetch(SIGNUP_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then(
                response => response.json(),
                err => console.log(err.message)
            ).then(json => {
                dispatch(actionCreator(SIGNUP_LOCAL, json))
            })
        }
    }
}

export function login(user){
    return dispatch => {
        
        return fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(
            response => response.json(),
            err => console.log(err.message)
        ).then(json => {
            dispatch(actionCreator(LOGIN_LOCAL, json))
        })
        
    }
}

// Method Helper
function inputValidation(user){
    
    if (user){return true}
    
    return false;
}