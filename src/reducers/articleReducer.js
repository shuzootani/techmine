const initialState = {
    articles: []
}

export const articleReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH_ARTICLES':
            return Object.assign({}, state, {articles: action.articles})
        default:
            return state
    }
}