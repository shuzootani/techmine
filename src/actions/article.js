import req from 'superagent'
// import jsonp from 'superagent-jsonp' no necessita por Qiita api

export const searchArticles = (keyword) => {
    return (dispatch) => {
        req.get('https://qiita.com/api/v2/items?page=1&per_page=20&query=' + keyword).end((err,data) => {
            if (!err && data) {
                dispatch(successFetchArticles(data.body))
            }
        })
    }
}

export const successFetchArticles = (result) => {
    return {
        type: 'SUCCESS_FETCH_ARTICLES',
        articles: result
    }
}