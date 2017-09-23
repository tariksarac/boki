import { combineReducers } from 'redux'
import videoReducer from './videoReducer'

const rootReducer = combineReducers({
    videoData: videoReducer,
    // add your other reducers here
});

export default rootReducer
