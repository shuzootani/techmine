const initialState = {
    slides: []
}

export const slideReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH_SLIDES':
            return Object.assign({}, state, {slides: action.slides})
        default:
            return state
    }
}