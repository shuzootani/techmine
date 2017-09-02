import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers'
import thunk from 'redux-thunk'
import {searchEvents} from './actions/event'
import {Router, Route, browserHistory} from 'react-router';

let store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(searchEvents('ruby'))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();