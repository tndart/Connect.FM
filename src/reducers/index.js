import { combineReducers } from 'redux'
import playlist from './playlist.reducer'
import artists from './artists.reducer'
import tags from './tags.reducer'
import user from './user.reducer'
import player from './player.reducer'

const rootReducer = combineReducers({
    artists,
    playlist,
    tags,
    user,
    player
});
  
export default rootReducer