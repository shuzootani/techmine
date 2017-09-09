export const searchVideos = (keyword) => {
    return (dispatch) => {
        const q4youtube = keyword + ' tutorial' + '&key=AIzaSyDDdB_g_Wa8T9eYTES0IBgWqNoeQCmlNHU'
        fetch('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=' + q4youtube)
            .then(res => res.json())
            .then(json => dispatch(successFetchVideos(json.items)))
            .catch(err => console.log(err))
    }
}

export const successFetchVideos = (result) => {
    return {
        type: 'SUCCESS_FETCH_VIDEOS',
        videos: result
    }
}