import req from 'superagent'
import jsonp from 'superagent-jsonp'

export const searchEvents = (keyword) => {
    return (dispatch) => {
        req.get('https://connpass.com/api/v1/event/?order=2&keyword=' + keyword).use(jsonp).end((err,data) => {
            if (!err && data) {
                console.log(data.body.events)
                dispatch(successFetchEvents(data.body.events.reverse()))
            }
        })
    }
}

export const successFetchEvents = (result) => {
    return {
        type: 'SUCCESS_FETCH_EVENTS',
        events: result
    }
}