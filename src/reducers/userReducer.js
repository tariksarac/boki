import {CHANGE_TO_ADMIN_SUCCESS, CHANGE_TO_ADMIN_FAILURE
} from '../constatnts/actionTypes';

let initialState = {
    isAdmin: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_TO_ADMIN_SUCCESS:
            return { ...state, isAdmin: !state.isAdmin };
        case CHANGE_TO_ADMIN_FAILURE:
            return { ...state };
        default:
            return state
    }
}