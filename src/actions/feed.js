// YQL
export const searchFeeds = (keyword) => {
    return (dispatch) => {
        const query = "select * from rss where url ='http://postd.cc/feed/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            let feeds = json.query.results.item
            dispatch(successFetchFeeds(feeds))
        })
        .catch(err => {console.log(err)})
    }
}

export const successFetchFeeds = (result) => {
    return {
        type: 'SUCCESS_FETCH_FEEDS',
        feeds: result
    }
}