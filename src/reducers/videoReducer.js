const initialState = {
    videos: []
}

export const videoReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH_VIDEOS':
            return Object.assign({}, state, {videos: action.videos})
        default:
            return state
    }
}