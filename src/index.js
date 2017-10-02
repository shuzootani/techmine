import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers'
import thunk from 'redux-thunk'
import {fetchFeeds} from './actions/fetch'
import {searchEvents} from './actions/event'
import {searchVideos} from './actions/video'
import {searchArticles} from './actions/article'
import {Router, Route, browserHistory} from 'react-router';
import promiseMiddleware from 'redux-promise';

let store = createStore(rootReducer, applyMiddleware(thunk))
//let store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
