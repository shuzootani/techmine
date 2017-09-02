import {eventReducer as event} from './eventReducer'
import {articleReducer as article} from './articleReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    event,
    article
})