import Actions from '../actions'
import Hashmap from 'hashmap'

const initialState = {
    map: new Hashmap(),
    list: [],
    lastFm: {
        map: new Hashmap(),
        list: [],
        isFetching: false
    }
};

export default function artists(state = initialState, action){
    switch(action.type){
        case Actions.ARTISTS_CHECKING_TOGGLE:
            let newList = state.list.map((artist, i) => artist._id === action._id ? {...artist, isChecked: action.isChecked } : artist)

            return Object.assign({}, state, {
                list: newList
            })

        case Actions.TOP_ARTISTS_REQ:
            if(!state.lastFm.isFetching){
                return Object.assign({}, state, {
                    lastFm: {
                        isFetching: true,
                        list: []
                    }
                })
            }

            return state;
        case Actions.TOP_ARTISTS_RES: 
            if(state.lastFm.isFetching) {
                if (action.payload && action.payload.length > 0) {
                    const newMap = new Hashmap()
                    
                    
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
        case Actions.TOP_ARTISTS_ERR: 
            return state

        case Actions.REMOVE_FROM_TOPARTISTS:
            const lastArr = state.list

            if (action.tagsUnchecked && action.tagsUnchecked.length > 0){
                const uncheckedNames = lastArr.map(el => {
                    for (let index = 0; index < action.tagsUnchecked.length; index++) {
                        const tags = el.tags.map(el => el.name)
                        if (tags.includes(action.tagsUnchecked[index].name))
                            return el._id
                    }

                    return undefined;
                })
                const newPayload = lastArr.filter((item,pos,arr) => {
                    return uncheckedNames.indexOf(item._id) !== pos
                })

                return Object.assign({}, state, {
                    list: newPayload
                })
            }

            return state
        default: 
            return state
    }
}


