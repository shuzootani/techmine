export const filterFeeds = (feeds, keyword) => {
    return feeds.filter(feed => feed.title.search(keyword) >= 0)
}