import React from 'react';
import SearchResult from '../components/SearchResult'
import {connect} from 'react-redux'

export const SearchResultContainer = () => {
    return <div><SearchResult/></div>
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.event.events,
        articles: state.article.articles
    }
}

export default connect(mapStateToProps)(SearchResult)