import React from 'react'
import EventCard from './EventCard'
import ArticleCard from './ArticleCard'
import '../styles/Event.css'

const SearchResult = ({events, articles, visible}) => {

    const renderArticles = () => {
        return articles.map((article,i) => {
            return <ArticleCard key={i} {...article} />
        })
    }

    const renderEvents = () => {
        return events.map((event,i) => {
            return <EventCard key={i} {...event} />
        })
    }

    const renderAll = () => {
        return renderEvents()
    }

    const renderResources = () => {
        switch (visible) {
            case 'ARTICLE':
                return renderArticles()
                break
            case 'EVENT':
                return renderEvents()
                break
            default:
                return renderAll()
                break
        }
    }

    return (
        <div className='CardList'>
            {renderResources()}
        </div>
    )
}

export default SearchResult