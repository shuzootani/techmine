export const labelForUrl = (url) => {
    if (url.search('hatena') >= 0) {
        return 'Hatena Tech'
    } else if (url.search('postd') >= 0) {
        return 'POSTD'
    } else if (url.search('jser') >= 0) {
        return 'JSer'
    } else if (url.search('echojs') >= 0) {
        return 'EchoJS'
    } else if (url.search('sitepoint') >= 0) {
        return 'sitepoint'
    } else {
        return 'TECH BLOG'
    }
}