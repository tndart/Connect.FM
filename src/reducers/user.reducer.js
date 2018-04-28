import Actions from '../actions'
import { config } from '../util/helpers'

let localStorageState = JSON.parse(localStorage.getItem(config.UserDataCookieName))

const defaultInitialState = {
    profile: undefined,
    preferences: undefined,
    auth: {
        isAuthorized: false,
        authorizedBy: undefined,
        local: {
            isAuthorized: false
        },
        google: {
            isAuthorized: false
        },
        jwtToken: null,
    }
}

const initialState = localStorageState ? localStorageState : defaultInitialState

export default function user(state = initialState, action){
    switch (action.type) {
        case Actions.SIGNUP_LOCAL:
            return state;

        case Actions.LOGIN_LOCAL:
            const newLocalState = {
                profile : action.payload.profile,
                preferences: action.payload.preferences,
                auth : { 
                    isAuthorized: true,
                    authorizedBy: "LOCAL",
                    local: { 
                        isAuthorized: true
                    } 
                }
            }

            localStorage.setItem(config.UserDataCookieName, JSON.stringify(newLocalState))

            return Object.assign({}, state, newLocalState)

        case Actions.LOGIN_OR_SIGNUP_BY_GOOGLE_SUCCEDED:
            if(!action.payload){
                return state;
            }

            const newUser = action.payload
            newUser.auth.isAuthorized = true
            localStorage.setItem(config.UserDataCookieName, JSON.stringify(newUser))   
            return Object.assign({}, state, newUser)

        case Actions.SAVE_GOOGLE_USER:
            const profile = action.payload.getBasicProfile()
            const newGoogleState = {
                profile: {
                    username: profile.getEmail(),
                    firstname: profile.getGivenName(),
                    lastname: profile.getFamilyName(),
                    pic: profile.getImageUrl(),
                },
                auth : { 
                    isAuthorized: true,
                    authorizedBy: "GOOGLE",
                    local: { 
                        isAuthorized: false
                    },
                    google: {
                        isAuthorized: true,
                        googleId: profile.getId(),
                        googleToken: action.payload.getAuthResponse().id_token
                    }
                }
            }

            localStorage.setItem(config.UserDataCookieName, JSON.stringify(newGoogleState))

            return Object.assign({}, state, newGoogleState);

        case Actions.LOGOUT:
            localStorage.removeItem(config.UserDataCookieName);
        
            return Object.assign({}, state, defaultInitialState);
        case Actions.UPDATE_PREFERENCES_SUCCEDED:
            return Object.assign({}, state, { preferences: action.payload.preferences});
        default:
            return state;
    }
}

