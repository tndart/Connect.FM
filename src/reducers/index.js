import { MUSICPLAYER_PLAY } from '../constants';

const player = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const musicPlayer = (state = [], action) => {
    let players = null;
    
    switch(action.type){
        case MUSICPLAYER_PLAY:
            players = [...state, player(action)];
            console.log('got here');
            return players;
            break;
        default:
            console.log('also got here');
            return state;
    }
}

export default musicPlayer;