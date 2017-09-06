import req from 'superagent'
import jsonp from 'superagent-jsonp'

export const searchEvents = (keyword) => {
    return (dispatch) => {
        req.get('https://connpass.com/api/v1/event/?order=2&keyword=' + keyword)
            .use(jsonp).end((err,data) => {
                if (!err && data) {
                    dispatch(successFetchEvents(data.body.events.reverse()))
                }
            })
    }
}

// fetchAPI needs jsonp as well ?
// export const searchEvents = (keyword) => {
//     return (dispatch) => {
//         fetch('https://qiita.com/api/v2/items?page=1&per_page=20&query=' + keyword)
//         .then(res => res.json()).then(data => dispatch(successFetchArticles(data)))
//     }
// }

export const successFetchEvents = (result) => {
    return {
        type: 'SUCCESS_FETCH_EVENTS',
        events: result
    }
}