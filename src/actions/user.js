import { fetch } from 'cross-fetch'

const SIGNUP_ENDPOINT = 'http://localhost:8080/user/signup'
const LOGIN_ENDPOINT = 'http://localhost:8080/user/login'

// Actions
const SIGNUP_LOCAL = 'SIGNUP_LOCAL'
const LOGIN_LOCAL = 'LOGIN_LOCAL'
const SAVE_GOOGLE_USER = 'SAVE_GOOGLE_USER'

export const UserConstants = {
    SIGNUP_LOCAL,
    LOGIN_LOCAL,
    SAVE_GOOGLE_USER
}

// Action Creators
function actionCreator(type, payload){
    return {
        type,
        payload
    }
}

export const UserActions = {
    saveGoogleUser,
    signup,
    login
}

function saveGoogleUser(user) {
    return actionCreator(SAVE_GOOGLE_USER, user);
}

// Action creators
function signup(user){
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

function login(user){
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

