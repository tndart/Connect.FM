import UserActions from '../actions'

let localStorageState = JSON.parse(localStorage.getItem('connect-fm-user'))

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
        case UserActions.SIGNUP_LOCAL:
            return state;

        case UserActions.LOGIN_LOCAL:
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

            localStorage.setItem('connect-fm-user', JSON.stringify(newLocalState))

            return Object.assign({}, state, newLocalState)

        case UserActions.SAVE_GOOGLE_USER:
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

            localStorage.setItem('connect-fm-user', JSON.stringify(newGoogleState))

            return Object.assign({}, state, newGoogleState);

        case UserActions.LOGOUT:
            localStorage.removeItem('connect-fm-user');
        
            return Object.assign({}, state, defaultInitialState);

        default:
            return state;
    }
}

