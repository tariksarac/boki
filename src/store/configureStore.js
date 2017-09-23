import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import reduxThunk from 'redux-thunk';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        // applyMiddleware(reduxThunk),
        compose(
            applyMiddleware(reduxThunk), // add middlewares here
            /**
             * Redux DevTools extension enhancer
             * if it is installed.
             */
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )

    )
}