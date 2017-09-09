export const filterFeeds = (feeds, keyword) => {
    let result = feeds.filter(feed => feed.title.search(keyword) >= 0)
    return result
}