import {
    GET_RESTAURANT_DETAIL
} from '../actions/types';

const INITIAL_STATE = {
    index : 0
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_RESTAURANT_DETAIL :
            return { index : action.payload.index }
        default :
            return state
    }
}