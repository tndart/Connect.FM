import UserActions from '../actions'

const initialState = {
    user: {
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
};

export default function user(state = initialState, action){
    switch (action.type) {
        case UserActions.SIGNUP_LOCAL:
            return state;

        case UserActions.LOGIN_LOCAL:
            return Object.assign({}, state, {
                data : action.payload.data,
                auth : { 
                    isAuthorized: true,
                    authorizedBy: "LOCAL",
                    local: { 
                        isAuthorized: true
                    } 
                }
            })

        case UserActions.SAVE_GOOGLE_USER:
            const profile = action.payload.getBasicProfile()

            const data = {
                id: profile.getId(),
                username: profile.getEmail(),
                firstname: profile.getGivenName(),
                lastname: profile.getFamilyName(),
                pic: profile.getImageUrl(),
            }

            return Object.assign({}, state, {
                data,
                auth : { 
                    isAuthorized: true,
                    authorizedBy: "GOOGLE",
                    local: { 
                        isAuthorized: false
                    },
                    google: {
                        isAuthorized: true,
                        googleId: data.id,
                        googleToken: action.payload.getAuthResponse().id_token
                    }
                }
            })

        default:
            return state;
    }
}

