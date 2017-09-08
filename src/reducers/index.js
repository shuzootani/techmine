import {eventReducer as event} from './eventReducer'
import {articleReducer as article} from './articleReducer'
import {slideReducer as slide} from './slideReducer'
import {feedReducer as feed} from './feedReducer'
import {filterReducer as filter} from './filterReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    event,
    article,
    slide,
    feed,
    filter
})