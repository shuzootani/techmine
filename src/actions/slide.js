// import speakerdeck from 'speakerdeck-scraper'
// import req from 'superagent'
// import jsonp from 'superagent-jsonp'

// export const searchSlides = (keyword) => {
//     return (dispatch) => {
//         fetch('https://speakerdeck.com/search?q=' + keyword)
//         .then(res => res.json()).then(data => dispatch(successFetchSlides(data)))
//     }
// }
// export const searchSlides = (keyword) => {
//     return (dispatch) => {
//         speakerdeck.getUser('patrickhamann', 1).then(user => {
//             console.log(user.talks.items)
//         })
//     }
// }

export const searchSlides = (keyword) => {
    return (dispatch) => {

    }
}

export const successFetchSlides = (result) => {
    return {
        type: 'SUCCESS_FETCH_SLIDES',
        slides: result
    }
}