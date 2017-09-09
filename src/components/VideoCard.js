import React from 'react';
import {formatDate} from '../utils/dateFormat'

const VideoCard = (props) => {

    const {snippet, id} = props

    return (
        <a className='EventCard' href={'https://www.youtube.com/watch?v=' + id.videoId} target='_blank'>
            <section className='header'>
                <span className='label label--connpass'>youtube</span>
                <h3>{snippet.title}</h3>
                <p><img src={snippet.thumbnails.medium.url} alt={snippet.title}/></p>
                <h4>{snippet.channelTitle}</h4>
                <span>{formatDate(new Date(snippet.publishedAt), 'YYYY年MM月DD日')}</span>
            </section>
        </a>
    )
}

export default VideoCard