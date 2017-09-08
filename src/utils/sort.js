export const sortFeeds = (feeds, keyword) => {
    return feeds.sort((a, b) => {
        if (a.bookmark_count > b.bookmark_count) return -1
        if (a.bookmark_count < b.bookmark_count) return 1
        if (a.bookmark_count === b.bookmark_count) return 0
    })
}