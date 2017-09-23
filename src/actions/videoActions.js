import { SAVE_VIDEO_SUCCESS } from '../constatnts/actionTypes'
/**
 * Save Video
 */
export function saveVideoToStore(data) {

    return (dispatch) => {

        let video = {
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