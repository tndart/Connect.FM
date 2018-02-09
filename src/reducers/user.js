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
                user: {
                    data : action.payload.data,
                    auth : { 
                        isAuthorized: true,
                        authorizedBy: "LOCAL",
                        local: { 
                            isAuthorized: true
                        } 
                    }
                }
            })

        default:
            return state;
    }
}

