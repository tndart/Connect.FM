import { combineReducers } from 'redux'
import playlist from './playlist'
import artists from './artists'
import tags from './tags'
import user from './user'
import player from './player.reducer'

const rootReducer = combineReducers({
    artists,
    playlist,
    tags,
    user,
    player
});
  
export default rootReducer