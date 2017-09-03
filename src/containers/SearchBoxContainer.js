import React from 'react';
import SearchBox from '../components/SearchBox'
import {connect} from 'react-redux'
import {searchEvents} from '../actions/event'
import {searchArticles} from '../actions/article'
// import {searchBooks} from '../actions/book'

export const SearchBoxContainer = () => {
    return <div><SearchBox/></div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequeted: (keyword) => {
            dispatch(searchEvents(keyword))
            dispatch(searchArticles(keyword))
            // dispatch(searchBooks(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)