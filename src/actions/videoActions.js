import { SAVE_VIDEO_SUCCESS, EDIT_VIDEO_SUCCESS, DELETE_VIDEO_SUCCESS } from '../constatnts/actionTypes'
/**
 * Add Video
 */
export function addVideoToStore(data) {

    return (dispatch) => {

        let video = {
            id: data.id,
            url: data.url,
            name: data.name
        };
        //assume that action is success
        return dispatch(saveVideoToStoreSuccess(video));
    }
}

function saveVideoToStoreSuccess(video) {
    return {
        type: SAVE_VIDEO_SUCCESS,
        payload: video
    }
}

/**
 * Edit Video
 */
export function editVideoInStore(data) {

    return (dispatch) => {

        let video = {
            id: data.id,
            url: data.url,
            name: data.name
        };
        //assume that action is success
        return dispatch(editVideoSuccess(video));
    }
}

function editVideoSuccess(video) {
    return {
        type: EDIT_VIDEO_SUCCESS,
        payload: video
    }
}

/**
 * Delete Video
 */
export function deleteVideoInStore(data) {

    return (dispatch) => {

        let video = {
            id: data.id,
            url: data.url,
            name: data.name
        };
        //assume that action is success
        return dispatch(deleteVideoSuccess(video));
    }
}

function deleteVideoSuccess(video) {
    return {
        type: DELETE_VIDEO_SUCCESS,
        payload: video
    }
}