import {eventReducer as event} from './eventReducer'
import {articleReducer as article} from './articleReducer'
import {filterReducer as filter} from './filterReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    event,
    article,
    filter
})