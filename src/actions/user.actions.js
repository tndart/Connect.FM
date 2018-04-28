import { fetch } from 'cross-fetch'
import { APIActions } from './api.actions';

const SIGNUP_ENDPOINT = 'http://localhost:8080/user/signup'
const LOGIN_ENDPOINT = 'http://localhost:8080/user/login'
const USER_PREFERENCES_ENDPOINT = 'http://localhost:8080/user/preferences'

// Actions
const SIGNUP_LOCAL = 'SIGNUP_LOCAL'
const LOGIN_LOCAL = 'LOGIN_LOCAL'
const SAVE_GOOGLE_USER = 'SAVE_GOOGLE_USER'
const LOGOUT = 'LOGOUT'
const UPDATE_PREFERENCES_SUCCEDED = 'UPDATE_PREFERENCES_SUCCEDED'
const UPDATE_PREFERENCES_ERROR = 'UPDATE_PREFERENCES_ERROR'
const UPDATE_PREFERENCES_STARTED = 'UPDATE_PREFERENCES_STARTED'

const LOGIN_OR_SIGNUP_BY_GOOGLE_SUCCEDED = 'LOGIN_OR_SIGNUP_BY_GOOGLE_SUCCEDED'
const LOGIN_OR_SIGNUP_BY_GOOGLE_ERROR = 'LOGIN_OR_SIGNUP_BY_GOOGLE_ERROR'
const LOGIN_OR_SIGNUP_BY_GOOGLE_STARTED = 'LOGIN_OR_SIGNUP_BY_GOOGLE_STARTED'


export const UserActions = {
    SIGNUP_LOCAL,
    LOGIN_LOCAL,
    SAVE_GOOGLE_USER,
    LOGOUT,
    LOGIN_OR_SIGNUP_BY_GOOGLE_SUCCEDED,
    LOGIN_OR_SIGNUP_BY_GOOGLE_ERROR,
    LOGIN_OR_SIGNUP_BY_GOOGLE_STARTED,
    UPDATE_PREFERENCES_SUCCEDED,
    UPDATE_PREFERENCES_ERROR,
    UPDATE_PREFERENCES_STARTED,

    updatePreferences,
    loginOrSignupByGoogle,
    saveGoogleUser,
    signup,
    login,
    logout
}

function updatePreferences(genrePreferences, artistPreferences){
    return (dispatch, getState) => {
        dispatch ( { type: UPDATE_PREFERENCES_STARTED } ) // event

        const onSuccess = (data) => {
            dispatch({ 
                type: UPDATE_PREFERENCES_SUCCEDED,
                payload: data 
            })
        }

        const onFailure = (error) => {
            dispatch({ 
                type: UPDATE_PREFERENCES_ERROR,
                payload: error 
            })
        }

        const stateUser = getState().user
        stateUser.preferences = {
            artists: artistPreferences,
            genres: genrePreferences,
        };
        
        dispatch( APIActions.post("User", USER_PREFERENCES_ENDPOINT, onSuccess, onFailure, stateUser) )

    }
}

function loginOrSignupByGoogle(user){
    return (dispatch, getState) => {
        dispatch(saveGoogleUser(user))

        const stateUser = getState().user

        dispatch( { type: LOGIN_OR_SIGNUP_BY_GOOGLE_STARTED } ) // event

        const onSuccess = (data) => {
            dispatch({ 
                type: LOGIN_OR_SIGNUP_BY_GOOGLE_SUCCEDED,
                payload: data 
            })
        }

        const onFailure = (error) => {
            dispatch({ 
                type: LOGIN_OR_SIGNUP_BY_GOOGLE_ERROR,
                payload: error 
            })
        }

        dispatch( APIActions.post("User", LOGIN_ENDPOINT, onSuccess, onFailure, stateUser) )
    }
}

// Action Creators
function actionCreator(type, payload){
    return {
        type,
        payload
    }
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
                return dispatch(actionCreator(SIGNUP_LOCAL, json))
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
            return dispatch(actionCreator(LOGIN_LOCAL, json))
        })
        
    }
}

function logout(){
    return dispatch => {
        return dispatch(actionCreator(LOGOUT))
    }
}

// Method Helper
function inputValidation(user){
    
    if (user){return true}
    
    return false;
}

