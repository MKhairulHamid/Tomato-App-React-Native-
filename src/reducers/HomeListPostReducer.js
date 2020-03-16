import {
    FILL_LIST_POST
} from '../actions/types';

const INITIAL_STATE = {
    listPost: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FILL_LIST_POST :
            return { listPost: action.payload }
        default :
            return state
    }
}