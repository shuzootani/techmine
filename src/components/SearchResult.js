import React from 'react'
import EventCard from './EventCard'
import ArticleCard from './ArticleCard'
import FeedCard from './FeedCard'
import '../styles/Event.css'

const SearchResult = ({events, articles, feeds, visible}) => {

    const renderArticles = () => {
        return articles.map((article) => {
            return <ArticleCard key={article.url} {...article} />
        })
    }

    const renderEvents = () => {
        return events.map((event) => {
            return <EventCard key={event.event_url} {...event} />
        })
    }

    const renderFeeds = () => {
        return feeds.map((item) => {
            return <FeedCard key={item.link} {...item} />
        })
    }

    const renderAll = () => {
        return [...renderArticles(), ...renderEvents(), ...renderFeeds()]
    }

    const renderResources = () => {
        switch (visible) {
            case 'ARTICLE':
                return renderArticles()
            case 'EVENT':
                return renderEvents()
            case 'FEED':
                return renderFeeds()
            default:
                return renderAll()
        }
    }

    return (
        <div className='CardList'>
            {renderResources()}
        </div>
    )
}

export default SearchResult