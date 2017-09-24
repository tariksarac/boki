import { combineReducers } from 'redux'
import videoReducer from './videoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    videoData: videoReducer,
    user: userReducer
});

export default rootReducer
