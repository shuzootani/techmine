const initialState = {
    events: []
}

export const eventReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_FETCH_EVENTS':
            return Object.assign({}, state, {events: action.events})
        default:
            return state
    }
}