import React from 'react';
import {formatDate} from '../utils/dateFormat'
import {labelForUrl} from '../utils/switch'

const FeedCard = (props) => {

    const {title, link, pubDate, category} = props

    const renderLabel = () => {
        return <span className='label label--feed'>{labelForUrl(link)}</span>
    }

    const renderDate = () => {
        return (
            <section className='date'>
                {formatDate(new Date(pubDate), 'YYYY年MM月DD日')}
            </section>
        )
    }

    const renderTags = () => {
        return (
            <section className='footer'>
                {category.slice(0,5).map((tag, i) => {
                    return <span key={i} className='tag'>{tag}</span>
                })}
            </section>
        )
    }

    return (
        <a className='EventCard' href={link} target='_blank'>
            <section className='header'>
                {link ? renderLabel() : null}
                <h3>{title}</h3>
                {pubDate ? renderDate() : null}
            </section>
            {category ? renderTags() : null}
        </a>
    )
}

export default FeedCard