import {OperationHelper} from 'apac'
import req from 'superagent'
import jsonp from 'superagent-jsonp'

const opHelper = new OperationHelper({
    awsId:     '[AKIAIRX37PT3VTNCLM7A]',
    awsSecret: '[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]',
    assocId:   '[trunkamazonse-22]',
    locale: 'JP'
})

export const searchBooks = (keyword) => {
    return (dispatch) => {
        req.get('http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=[AKIAIRX37PT3VTNCLM7A]&AssociateTag=[trunkamazonse-22]&Operation=ItemSearch&Brand=Lacoste&Availability=Available&SearchIndex=FashionWomen&Keywords=react').use(jsonp).end((err,data) => {
            if (!err && data) {
                console.log(data)
                // dispatch(successFetchEvents(data))
            }
            if (err) {
                console.log(err)
            }
        })
    }
}

// export const searchBooks = (keyword) => {
//     console.log('BOOKS')
//     return (dispatch) => {
//         opHelper.execute('ItemSearch', {
//             'SearchIndex': 'Books',
//             'Keywords': 'react',
//             'ResponseGroup': 'ItemAttributes,Offers'
//         }).jsonp().then((err, response) => {
//             if (!err && response) {
//                 console.log("Results object: ", response.result);
//                 console.log("Raw response body: ", response.responseBody);
//             }
//             if (err) {
//                 console.error("Something went wrong! ", err);                
//             }
//         })
//     }
// }

export const successFetchBooks = (result) => {
    return {
        type: 'SUCCESS_FETCH_BOOKS',
        books: result
    }
}