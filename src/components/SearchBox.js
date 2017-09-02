import React from 'react'
import {searchEvents} from '../actions/event'
import {searchArticles} from '../actions/article'
import {searchBooks} from '../actions/book'

const SearchBox = (props) => {

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            props.dispatch(searchEvents(e.target.value))
            props.dispatch(searchArticles(e.target.value))
            // props.dispatch(searchBooks(e.target.value))
        }
    }

    return <input placeholder='Search ...' onKeyDown={handleEnter}/>
}

export default SearchBox