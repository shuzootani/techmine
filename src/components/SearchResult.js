import React from 'react'
import EventCard from './EventCard'
import ArticleCard from './ArticleCard'
import FeedCard from './FeedCard'
import VideoCard from './VideoCard'
import '../styles/Event.css'

const SearchResult = ({events, articles, feeds, videos, visible}) => {

    const renderArticles = () => {
        return articles.map((article) => {
            return <ArticleCard key={article.id} {...article} />
        })
    }

    const renderEvents = () => {
        return events.map((event) => {
            return <EventCard key={event.event_id} {...event} />
        })
    }

    const renderFeeds = () => {
        return feeds.map((item, i) => {
            return <FeedCard key={i} {...item} />
        })
    }

    const renderVideos = () => {
        return videos.map(video => {
            return <VideoCard key={video.id.videoId} {...video}/>
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
            case 'VIDEO':
                return renderVideos()
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