// fetchAPI
export const searchArticles = (keyword) => {
    return (dispatch) => {
        fetch('https://qiita.com/api/v2/items?page=1&per_page=20&query=' + keyword)
        .then(res => res.json()).then(data => dispatch(successFetchArticles(data)))
    }
}

export const successFetchArticles = (result) => {
    return {
        type: 'SUCCESS_FETCH_ARTICLES',
        articles: result
    }
}

// // Redux-Sagaで実装したら。。。
// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
// // import Api from '...'　APIコール用のファイル

// // ジェネレーター関数にアローファンクションは使えない。。。
// // functionの省略は無理なのか。
// function* fetchAricles(action) {
//     try {
//         // どっかでfetchAricles()が呼ばれたら、ArticlesをGETするAPIをコール。
//         const articles = yield call(Api.fetchArticles, action.payload.keyword);

//         // 返ってきたArticlesをreducerにdispatch
//         yield put({type: "ARTICLES_FETCH_SUCCEEDED", articles: articles});
//     } catch (e) {

//         // GETに失敗したらエラーをdispatch
//         yield put({type: "ARTICLES_FETCH_FAILED", message: e.message});
//     }
// }

// function* mySaga() {
//     // ARTICLES_FETCH_REQUESTEDがdispatchされたらfetchArticlesを呼ぶためのアクションリスナー
//     yield takeEvery("ARTICLES_FETCH_REQUESTED", fetchArticles);
// }

// export default mySaga;

// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
// import Api from '...'

// // ワーカー Saga: USER_FETCH_REQUESTED Action によって起動する
// function * fetchUser(action) {
//     try {
//         const user = yield call(Api.fetchUser, action.payload.userId);
//         yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//     } catch (e) {
//         yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }

// /*
// USER_FETCH_REQUESTED Action が送出されるたびに fetchUser を起動します。
// ユーザ情報の並列取得にも対応しています。
// */
// function * mySaga() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

// /*
// 代わりに takeLatest を使うこともできます。

// しかし、ユーザ情報の並列取得には対応しません。
// もしレスポンス待ちの状態で USER_FETCH_REQUESTED を受け取った場合、
// 待ち状態のリクエストはキャンセルされて最後の1つだけが実行されます。
// */
// function * mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

// export default mySaga;