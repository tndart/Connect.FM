import { PLAYLIST } from '../actions/playlist'

const initialState = {
    playlist: [],
    shouldFetch: false,
    isFetching: false,
    gotData: false
};

export function playlist(state = initialState, action){
    switch(action.type){
        case PLAYLIST.GET_NEW_PLAYLIST: 
            return Object.assign({}, state, {
                shouldFetch: true
            });
        case PLAYLIST.NEW_PLAYLIST_REQ: 
            if(state.shouldFetch)
                return Object.assign({}, state, {
                    shouldFetch: false,
                    isFetching: true,
                    gotData: false
                });
            
            return state
        case PLAYLIST.NEW_PLAYLIST_RES: 
            return Object.assign({}, state, {
                isFetching: false,
                gotData: true,
                playlist: action.playlist
            });
        default: 
            return state
    }
}


