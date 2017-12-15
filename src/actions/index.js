import { MUSICPLAYER_PLAY } from '../constants';

export const playMusic = () => {
    const action = {
        type: MUSICPLAYER_PLAY
    };
    
    console.log('action ', action);
    return action;
}