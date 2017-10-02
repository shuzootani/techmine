export const filterFeeds = (feeds, keyword) => {
    return feeds.filter(feed => feed.title.toLowerCase().search(keyword.toLowerCase()) >= 0)
}