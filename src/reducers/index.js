import { combineReducers } from 'redux'
import playlist from './playlist'
import artists from './artists'
import tags from './tags'

const rootReducer = combineReducers({
    artists,
    playlist,
    tags
});
  
export default rootReducer