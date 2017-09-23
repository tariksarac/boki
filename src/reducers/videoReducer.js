import {SAVE_VIDEO_FAILURE, SAVE_VIDEO_SUCCESS
} from '../constatnts/actionTypes';

let initialState = {
    videos: [
        { name: 'video one', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
        // {name: 'video one', url: ''}
        ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_VIDEO_SUCCESS:
            return { ...state, videos: [...state.videos, action.payload] };
        case SAVE_VIDEO_FAILURE:
            return { ...state };
        default:
            return state
    }
}