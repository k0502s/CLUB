import '@babel/polyfill';
import api from './api';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
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
} from '../../types';

// up like

function* likeUp(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result);
        yield put({
            type: LIKE_UP_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: LIKE_UP_FAILURE,
            payload: false,
        });
    }
}

export function* watchLikeUp() {
    yield takeEvery(LIKE_UP_REQUEST, likeUp);
}

// un like

function* unlike(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result);
        yield put({
            type: LIKE_UN_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: LIKE_UN_FAILURE,
            payload: false,
        });
    }
}

export function* watchUnLike() {
    yield takeEvery(LIKE_UN_REQUEST, unlike);
}

// up dislike

function* dislikeUp(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: DISLIKE_UP_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: DISLIKE_UP_FAILURE,
            payload: false,
        });
    }
}

export function* watchDisLikeUp() {
    yield takeEvery(DISLIKE_UP_REQUEST, dislikeUp);
}

// un dislike

function* undislike(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: DISLIKE_UN_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: DISLIKE_UN_FAILURE,
            payload: false,
        });
    }
}

export function* watchUndisLike() {
    yield takeEvery(DISLIKE_UN_REQUEST, undislike);
}


