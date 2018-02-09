import { combineReducers } from 'redux'
import playlist from './playlist'
import artists from './artists'
import tags from './tags'
import user from './user'

const rootReducer = combineReducers({
    artists,
    playlist,
    tags,
    user
});
  
export default rootReducer