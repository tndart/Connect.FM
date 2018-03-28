import Actions from '../actions'
import { config } from '../util/helpers'

let localStorageState = JSON.parse(localStorage.getItem(config.UserDataCookieName))

const defaultInitialState = {
    data: undefined,
    auth: {
        isAuthorized: false,
        authorizedBy: undefined,
        local: {
            isAuthorized: false
        },
        google: {
            isAuthorized: false
        }
    }
}

const initialState = localStorageState ? localStorageState : defaultInitialState

export default function user(state = initialState, action){
    switch (action.type) {
        case Actions.SIGNUP_LOCAL:
            return state;

        case Actions.LOGIN_LOCAL:
            const newLocalState = {
                data : action.payload.data,
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

        case Actions.SAVE_GOOGLE_USER:
            const profile = action.payload.getBasicProfile()
            const newGoogleState = {
                data: {
                    id: profile.getId(),
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

        default:
            return state;
    }
}

