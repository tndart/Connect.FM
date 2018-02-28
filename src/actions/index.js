import * as PlaylistActions from './playlist'
import * as ArtistActions from './artists.actions'
import * as TagActions from './tags'
import * as User from './user.actions'
import * as Player from './player.actions'

export default {
    ...PlaylistActions,
    ...ArtistActions,
    ...TagActions,
    ...User.UserActions,
    ...User.UserConstants,
    ...Player.PlayerActions,
    ...Player.PlayerConstants
}
