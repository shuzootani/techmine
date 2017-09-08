const initialState = {
    feeds: []
}

export const feedReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH_FEEDS':
            return Object.assign({}, state, {feeds: [...state.feeds, ...action.feeds]})
        default:
            return state
    }
}