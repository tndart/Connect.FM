import * as PlaylistActions from './playlist'
import * as ArtistActions from './artists'
import * as TagActions from './tags'
import * as UserActions from './user'

export default {
    ...PlaylistActions,
    ...ArtistActions,
    ...TagActions,
    ...UserActions
}
