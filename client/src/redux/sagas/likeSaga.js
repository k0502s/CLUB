import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import {
    // LIKE_GET_REQUEST,
    // LIKE_GET_FAILURE,
    // LIKE_GET_SUCCESS,
    // DISLIKE_GET_REQUEST,
    // DISLIKE_GET_FAILURE,
    // DISLIKE_GET_SUCCESS,
    LIKE_UP_REQUEST,
    LIKE_UP_FAILURE,
    LIKE_UP_SUCCESS,
    LIKE_UN_REQUEST,
    LIKE_UN_FAILURE,
    LIKE_UN_SUCCESS,
    DISLIKE_UP_REQUEST,
    DISLIKE_UP_FAILURE,
    DISLIKE_UP_SUCCESS,
    DISLIKE_UN_REQUEST,
    DISLIKE_UN_FAILURE,
    DISLIKE_UN_SUCCESS,
} from '../types';

// // get likes

// const likegetAPI = (likeData) => {
//     console.log(likeData, 'likeData');

//     return axios.post('/api/like/getLikes', likeData);
// };

// function* likeGet(action) {
//     try {
//         const result = yield call(likegetAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: LIKE_GET_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: LIKE_GET_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchLikeGet() {
//     yield takeEvery(LIKE_GET_REQUEST, likeGet);
// }

// // get dislikes

// const dislikegetAPI = (dislikeData) => {
//     console.log(dislikeData, 'dislikeData');

//     return axios.post('/api/like/getdisLikes', dislikeData);
// };

// function* dislikeGet(action) {
//     try {
//         const result = yield call(dislikegetAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: DISLIKE_GET_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: DISLIKE_GET_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchDisLikeGet() {
//     yield takeEvery(DISLIKE_GET_REQUEST, dislikeGet);
// }

// up like

const likeupAPI = (likeData) => {
    console.log(likeData, 'likeData');

    return axios.post('/api/like/upLike', likeData);
};

function* likeUp(action) {
    try {
        const result = yield call(likeupAPI, action.payload);
        console.log(result);
        yield put({
            type: LIKE_UP_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: LIKE_UP_FAILURE,
            payload: e.response,
        });
    }
}

function* watchLikeUp() {
    yield takeEvery(LIKE_UP_REQUEST, likeUp);
}

// un like

const unlikeAPI = (likeData) => {
    console.log(likeData, 'likeData');

    return axios.post('/api/like/unLike', likeData);
};

function* unlike(action) {
    try {
        const result = yield call(unlikeAPI, action.payload);
        console.log(result);
        yield put({
            type: LIKE_UN_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: LIKE_UN_FAILURE,
            payload: e.response,
        });
    }
}

function* watchUnLike() {
    yield takeEvery(LIKE_UN_REQUEST, unlike);
}

// up dislike

const dislikeupAPI = (likeData) => {
    console.log(likeData, 'likeData');

    return axios.post('/api/like/unDisLike', likeData);
};

function* dislikeUp(action) {
    try {
        const result = yield call(dislikeupAPI, action.payload);
        console.log(result);
        yield put({
            type: DISLIKE_UP_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: DISLIKE_UP_FAILURE,
            payload: e.response,
        });
    }
}

function* watchDisLikeUp() {
    yield takeEvery(DISLIKE_UP_REQUEST, dislikeUp);
}

// un dislike

const undislikeAPI = (likeData) => {
    console.log(likeData, 'likeData');

    return axios.post('/api/like/upDisLike', likeData);
};

function* undislike(action) {
    try {
        const result = yield call(undislikeAPI, action.payload);
        console.log(result);
        yield put({
            type: DISLIKE_UN_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: DISLIKE_UN_FAILURE,
            payload: e.response,
        });
    }
}

function* watchUndisLike() {
    yield takeEvery(DISLIKE_UN_REQUEST, undislike);
}

export default function* authSaga() {
    yield all([
        // fork(watchLikeGet), fork(watchDisLikeGet),
        fork(watchLikeUp),
        fork(watchUnLike),
        fork(watchDisLikeUp),
        fork(watchUndisLike),
    ]);
}
