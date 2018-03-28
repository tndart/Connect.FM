import Actions from '../actions'

const initialState = {
    cursorIndex: -1,
    isPlaying: false,
    currVideo: {},
    ready: false
};

export default function player(state = initialState, action){
    switch(action.type){
        case Actions.FIRST_PLAY:
            return Object.assign({}, state, {
                cursorIndex: 0,
                ready: false
            })
        case Actions.FIRST_PLAY_FINISHED:
            return Object.assign({}, state, {
                ready: true,
                isPlaying: true,
                currVideo: action.payload.currVideo,
                cursorIndex: action.payload.cursorIndex
            })
        case Actions.PLAY: 
            if(state.ready){
                return Object.assign({}, state, {
                    isPlaying: true
                })
            }

            return state
        case Actions.NEXT_SONG:
            if(state.ready){
                return Object.assign({}, state, {
                    isPlaying: true,
                    cursorIndex: action.payload.cursorIndex,
                    currVideo: action.payload.currVideo,
                })
            }

            return state
        case Actions.PAUSE: 
            if(state.ready){
                return Object.assign({}, state, {
                    isPlaying: false
                })
            }

            return state
        default: 
            return state
    }
}


