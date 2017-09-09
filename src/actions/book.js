import amazon from 'amazon-product-api'

const client = amazon.createClient({
    awsId: 'AWS Key ID',
    awsSecret: 'AWS Secret',
    awsTag: 'ASSOCIATION ID'
})

// unable to send request from browser client due to CORS
export const searchBooks = (keyword) => {
    return (dispatch) => {
        client
            .itemSearch({
                Keywords: keyword, 
                searchIndex: 'Books',
                // responseGroup: 'ItemAttributes,Offers,Images'
            })
            .then(results => {
                console.log(results)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const successFetchBooks = (result) => {
    return {
        type: 'SUCCESS_FETCH_BOOKS',
        books: result
    }
}