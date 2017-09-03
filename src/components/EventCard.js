import React from 'react';
import {formatDate} from '../utils/dateFormat'

const EventCard = (props) => {

    const {event_url, address, title, started_at, hash_tag} = props

    return (
        <a className='EventCard' href={event_url} target='_blank'>        
            <section className='date'>
                {formatDate(new Date(started_at), 'YYYY年MM月DD日')}                
            </section>
            <section className='header'>
                <span className='label label--connpass'>connpassイベント</span>
                <h3>{title}</h3>
                <span>{address}</span>
            </section>
            <section className='footer'>
                {hash_tag.split(',').slice(0,5).map((tag, i) => {
                    if (tag) return <span key={i} className='tag'>{tag}</span>
                })}
            </section>
        </a>
    )
}

export default EventCard