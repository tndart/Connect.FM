import UserActions from '../actions'
import { lstat } from 'fs';

const initialState = {
    user: {
        firstname: '',
        lastname: '',
        credentials: {
            google: {
                tokenId: '',
                auth: ''
            }
        }
    }
};

export default function user(state = initialState, action){
    switch (action.type) {
        case UserActions.ACTION:
            console.log('here!!!!!!')
            break;
    
        default:
            break;
    }
}

