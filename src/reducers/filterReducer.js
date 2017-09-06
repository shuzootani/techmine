const initialState = {
    visible: ''
}

export const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FILTER_BY_TAB':
            return Object.assign({}, state, {visible: action.tab})
        default:
            return state
    }
}