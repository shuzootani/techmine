import React from 'react';
import {formatDate} from '../utils/dateFormat'

const ArticleCard = (props) => {

    const {url, title, updated_at, tags, likes_count} = props

    return (
        <a className='EventCard' href={url} target='_blank'>
            <section className='date'>
                {formatDate(new Date(updated_at), 'YYYY年MM月DD日')}
            </section>
            <section className='header'>
                <span className='label label--qiita'>Qiita記事</span><span>　いいね数 {likes_count}</span>
                <h3>{title}</h3>
            </section>
            <section className='footer'>
                {tags.slice(0,5).map((tag, i) => {
                    if (tag) return <span key={i} className='tag'>{tag.name}</span>
                })}
            </section>
        </a>
    )
}

export default ArticleCard