import {SAVE_VIDEO_FAILURE, SAVE_VIDEO_SUCCESS, EDIT_VIDEO_SUCCESS, EDIT_VIDEO_FAILURE, DELETE_VIDEO_SUCCESS, DELETE_VIDEO_FAILURE
} from '../constatnts/actionTypes';

let initialState = {
    videos: [
        {id: 0, name: 'Test Video', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_VIDEO_SUCCESS:
            return { ...state, videos: [...state.videos, action.payload] };
        case SAVE_VIDEO_FAILURE:
            return { ...state };
        case EDIT_VIDEO_SUCCESS:
            return { ...state, videos: [...state.videos.filter((item) => !(item.id === action.payload.id)), action.payload] };
        case EDIT_VIDEO_FAILURE:
            return { ...state };
        case DELETE_VIDEO_SUCCESS:
            return { ...state, videos: [...state.videos.filter((item) => !(item.id === action.payload.id))] };
        case DELETE_VIDEO_FAILURE:
            return { ...state };
        default:
            return state
    }
}