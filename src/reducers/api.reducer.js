import Actions from '../actions'

const initialState = {
    type: "",
    payload: {}
};

export default function api(state = initialState, action){
    switch(action.type){
        case Actions.API_REQUEST:
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload
            })
        default: 
            return state
    }
}


