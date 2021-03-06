import React from 'react';
import {formatDate} from '../utils/dateFormat'

const EventCard = (props) => {

    const {event_url, address, title, started_at, hash_tag} = props

    const renderTags = () => {
        return (
            hash_tag.split(',').slice(0,5).map((tag, i) => {
                return <span key={i} className='tag'>{tag}</span>
            })
        )
    }

    return (
        <a className='EventCard' href={event_url} target='_blank'>        
            <section className='header'>
                <span className='label label--connpass'>connpass</span>
                <h3>{title}</h3>
                <p>{formatDate(new Date(started_at), 'YYYY年MM月DD日')}</p>
                <span>{address}</span>
            </section>
            <section className='footer'>
                {hash_tag ? renderTags() : null}
            </section>
        </a>
    )
}

export default EventCard