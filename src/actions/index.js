import * as PlaylistActions from './playlist'
import * as ArtistActions from './artists.actions'
import * as TagActions from './tags'
import * as User from './user'

export default {
    ...PlaylistActions,
    ...ArtistActions,
    ...TagActions,
    ...User.UserActions,
    ...User.UserConstants
}
