import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { BrowserRouter as Router} from 'react-router-dom'
import Main from './containers/Main/'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
