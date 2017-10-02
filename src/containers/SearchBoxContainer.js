import React from 'react';
import SearchBox from '../components/SearchBox'
import {connect} from 'react-redux'
import {searchEvents} from '../actions/event'
import {searchArticles} from '../actions/article'
import {searchFeeds} from '../actions/feed'
import {fetchFeeds} from '../actions/fetch'
import {searchVideos} from '../actions/video'
// import {searchSlides} from '../actions/slide'
import {searchBooks} from '../actions/book'

export const SearchBoxContainer = () => {
    return <div><SearchBox/></div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequeted: (keyword) => {
            dispatch(searchEvents(keyword))
            dispatch(searchArticles(keyword))
            dispatch(searchVideos(keyword))
            dispatch(fetchFeeds(keyword))          
            // dispatch(searchSlides(keyword))
            // dispatch(searchBooks(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)