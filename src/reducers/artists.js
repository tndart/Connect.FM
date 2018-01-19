import ArtistActions from '../actions'

const initialState = {
    list: [],
    lastFm: {
        shouldFetch: false,
        isFetching: false,
        gotData: false,
        list: []
    }
};

export default function artists(state = initialState, action){
    switch(action.type){
        case ArtistActions.GET_DEMO: 
            return Object.assign({},state, {
                list: action.payload,
                lastFm: {
                    list: action.payload
                }
            })
        case ArtistActions.ARTISTS_CHECKING_TOGGLE:
            var newList = state.list.map((artist, i) => artist._id === action._id ? {...artist, isChecked: action.isChecked } : artist)

            return Object.assign({}, state, {
                list: newList
            })

        case ArtistActions.TOP_ARTISTS_REQ:
            return state

            /*return Object.assign({}, state, {
                fetchLastFM: {
                    shouldFetch: true,
                    list: []
                }
            })*/
        case ArtistActions.TOP_ARTISTS_RES: 
            return state

            /*const newArr = state.payload.concat(payload)  
            const idPositions = newArr.map(el => el.id)
            const newPayload = newArr.filter((item, pos, arr) => {
                                            return idPositions.indexOf(item.id) == pos;
                                        })
            return state.merge({ payload: newPayload })*/

            /*if(state.shouldFetch)
                return Object.assign({}, state, {
                    fetchLastFM: {
                        shouldFetch: false,
                        isFetching: true,
                        gotData: false
                    }
            });*/
        case ArtistActions.TOP_ARTISTS_ERR: 
            return state

            /*return Object.assign({}, state, {
                fetchLastFM: {
                    isFetching: false,
                    gotData: true,
                    err: action.err
                }
            });*/
        default: 
            return state
    }
}


