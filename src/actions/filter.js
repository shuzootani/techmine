export const filterByTab = (tab) => {
    console.log(tab)
    return {
        type: 'FILTER_BY_TAB',
        tab
    }
}