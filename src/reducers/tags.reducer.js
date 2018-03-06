import TagActions from '../actions'

const initialState = {
    topTags: [],
    lastFm: {    
        isFetching: false,
        error: ''
    }
};

export default function tags(state = initialState, action){
    switch(action.type){
        case TagActions.TAGS_TOP_REQ:
            if (!state.lastFm.isFetching) {
                return Object.assign({}, state, {
                    lastFm: { 
                        isFetching: true
                    }
                })
            }
        
            return state
        case TagActions.TAGS_TOP_RES: 
            if(state.lastFm.isFetching) {
                const newArr = state.topTags.concat(action.payload)  
                const idPositions = newArr.map(el => el._id)
                const newPayload = newArr.filter((item, pos, arr) => {
                                                return idPositions.indexOf(item._id) === pos;
                })

                return Object.assign({}, state, {
                    topTags: newPayload,
                    lastFm: {
                        isFetching: false,
                        topTags: action.payload,
                        receivedAt: Date.now()            
                    }
                })
            }
            
            return state
        case TagActions.TAGS_TOP_ERR: 
            return Object.assign({}, state, {
                lastFm: {
                    isFetching: false,
                    error: action.error.message,
                    receivedAt: Date.now()
                }
            });
        case TagActions.TAGS_CHECKING_TOGGLE:
            let newList = state.topTags.map((tag, i) => 
                                            tag._id === action._id ? {...tag, isChecked: action.isChecked } : tag)

            return Object.assign({}, state, {
                topTags: newList
            })
            
        default: 
            return state
    }
}


