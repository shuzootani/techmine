import React from 'react'
import EventCard from './EventCard'
import ArticleCard from './ArticleCard'
import '../styles/Event.css'

const SearchResult = ({events, articles}) => {
    return (
        <div className='CardList'>
            {articles.map((article,i) => {
                return <ArticleCard key={i} {...article} />
            })}
            {events.map((event,i) => {
                return <EventCard key={i} {...event} />
            })}
        </div>
    );
};

export default SearchResult;