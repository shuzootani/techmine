import {filterFeeds} from '../utils/filter'

// YQL
export const fetchFeeds = (keyword) => {
    return (dispatch) => {

        // -------------- はてな（テクノロジー） ----------------------------
        const q4hatena = "select * from rss where url ='http://b.hatena.ne.jp/hotentry/it.rss'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4hatena + "&format=json")
        .then(res => res.json())
        .then(json => {
            let hatena = json.query.results.item
            dispatch(successFetchFeeds(filterFeeds(hatena, keyword)))
        })
        .catch(err => {console.log(err)})

        // -------------- POSTD ----------------------------
        const q4postd = "select * from rss where url ='http://postd.cc/feed/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4postd + "&format=json")
        .then(res => res.json())
        .then(json => {
            let postd = json.query.results.item
            dispatch(successFetchFeeds(filterFeeds(postd, keyword)))
        })
        .catch(err => {console.log(err)})           

        // -------------- JSer ----------------------------
        const q4jser = "select * from rss where url ='https://jser.info/rss/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4jser + "&format=json")
        .then(res => res.json())
        .then(json => {
            let jser = json.query.results.item    
            dispatch(successFetchFeeds(filterFeeds(jser, keyword)))
        })

        // -------------- sitepoint ----------------------------
        const q4sitepoint = "select * from rss where url ='https://www.sitepoint.com/feed/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4sitepoint + "&format=json")
        .then(res => res.json())
        .then(json => {
            let sitepoint = json.query.results.item
            dispatch(successFetchFeeds(filterFeeds(sitepoint, keyword)))    
        })
        .catch(err => {console.log(err)})

        // -------------- EchoJS ----------------------------        
        const q4echojs = "select * from rss where url ='http://www.echojs.com/rss'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4echojs + "&format=json")
        .then(res => res.json())
        .then(json => {
            let echojs = json.query.results.item
            dispatch(successFetchFeeds(filterFeeds(echojs, keyword)))
        })
        .catch(err => {console.log(err)})

        // // -------------- eureka ----------------------------
        // const q4eureka = "select * from rss where url ='https://developers.eure.jp/feed/'"
        // fetch("https://query.yahooapis.com/v1/public/yql?q=" + q4eureka + "&format=json")
        // .then(res => res.json())
        // .then(json => {
        //     let eureka = json.query.results.item
        //     dispatch(successFetchFeeds(eureka))            
        // })

        // -------------- TOPTAL ----------------------------
        .catch(err => {console.log(err)})
        const query = "select * from rss where url ='https://www.toptal.com/developers/blog.rss'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            let toptal = json.query.results.item
            dispatch(successFetchFeeds(filterFeeds(toptal, keyword)))
        })
        .catch(err => {console.log(err)})
    }
}

export const fetchPOSTD = () => {
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

export const fetchEureka = () => {
    return (dispatch) => {
        const query = "select * from rss where url ='https://developers.eure.jp/feed/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {console.log(err)})
    }
}

export const fetchToptal = () => {
    return (dispatch) => {
        const query = "select * from rss where url ='https://www.toptal.com/developers/blog.rss'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {console.log(err)})
    }
}

export const fetchSitePoint = () => {
    return (dispatch) => {
        const query = "select * from rss where url ='https://www.sitepoint.com/feed/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {console.log(err)})
    }
}

export const fetchJSer = () => {
    return (dispatch) => {
        const query = "select * from rss where url ='https://jser.info/rss/'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {console.log(err)})
    }
}

export const fetchEchoJS = () => {
    return (dispatch) => {
        const query = "select * from rss where url ='http://www.echojs.com/rss'"
        fetch("https://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json")
        .then(res => res.json())
        .then(json => {
            console.log(json)
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