import * as PlaylistActions from './playlist'
import * as ArtistActions from './artists.actions'
import * as TagActions from './tags'
import {UserActions} from './user.actions'
import {PlayerActions} from './player.actions'
import {APIActions} from './api.actions'
import * as Logger from './logger.actions'

export default {
    ...PlaylistActions,
    ...ArtistActions,
    ...TagActions,
    ...UserActions,
    ...PlayerActions,
    ...APIActions,
    ...Logger
}
