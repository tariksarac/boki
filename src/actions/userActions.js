import { CHANGE_TO_ADMIN_SUCCESS } from '../constatnts/actionTypes'
/**
 * Set user as admin
 */
export function changeUserRole() {

    return (dispatch) => {

        //assume that action is success
        return dispatch(changeUserRoleSuccess());
    }
}

function changeUserRoleSuccess() {
    return {
        type: CHANGE_TO_ADMIN_SUCCESS,
    }
}