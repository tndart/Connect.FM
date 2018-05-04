import Actions from '../actions'

const initialState = {
    playlist: [],
    shouldFetch: false,
    isFetching: false,
    gotData: false
};

export default function playlist(state = initialState, action){
    switch(action.type){
        case Actions.GET_NEW_PLAYLIST: 
            return Object.assign({}, state, {
                shouldFetch: true
            })
        case Actions.NEW_PLAYLIST_REQ: 
            if(state.shouldFetch)
                return Object.assign({}, state, {
                    shouldFetch: false,
                    isFetching: true,
                    gotData: false
                });
            
            return state
        case Actions.NEW_PLAYLIST_RES: 
            return Object.assign({}, state, {
                isFetching: false,
                gotData: true,
                playlist: action.payload
            });
        case Actions.NEW_PLAYLIST_ERR: 
            return Object.assign({}, state, {
                isFetching: false,
                gotData: false,
                error: action.error
            });
        default: 
            return state
    }
}


