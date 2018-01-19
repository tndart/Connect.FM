import * as PlaylistActions from './playlist'
import * as ArtistActions from './artists'
import * as TagActions from './tags'

export default {
    ...PlaylistActions,
    ...ArtistActions,
    ...TagActions
}
