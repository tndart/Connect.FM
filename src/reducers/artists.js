import ArtistActions from '../actions'

const initialState = {
    list: [],
    lastFm: {
        isFetching: false,
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
            if(!state.lastFm.isFetching){
                return Object.assign({}, state, {
                    lastFm: {
                        isFetching: true,
                        list: []
                    }
                })
            }

            return state;
        case ArtistActions.TOP_ARTISTS_RES: 
            if(state.lastFm.isFetching) {
                if (action.payload && action.payload.length > 0) {
                    const newArr = state.list.concat(action.payload)
                    const idPositions = newArr.map(el => el._id)
                    const newPayload = newArr.filter((item, pos, arr) => {
                        return idPositions.indexOf(item._id) === pos
                    })

                    return Object.assign({}, state, {
                        list: newPayload,
                        lastFm: {
                            isFetching: false,
                            list: action.payload
                        }
                    })
                }
            }

            return state;
        case ArtistActions.TOP_ARTISTS_ERR: 
            return state

        case ArtistActions.REMOVE_ARTISTS:
            const lastArr = state.list;
            const uncheckedNames = lastArr.map(el => {
                for (var index = 0; index < action.tagsUnchecked.length; index++) {
                    const tags = el.tags.map(el => el.name)
                    if (tags.includes(action.tagsUnchecked[index].name))
                        return el._id;
                }
            })
            const newPayload = lastArr.filter((item,pos,arr) => {
                return uncheckedNames.indexOf(item._id) !== pos
            })

            return Object.assign({}, state, {
                list: newPayload
            })
        default: 
            return state
    }
}


