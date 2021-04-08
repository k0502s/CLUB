import '@babel/polyfill';
import api from './api';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    POSTS_LIST_FAILURE,
    POSTS_LIST_SUCCESS,
    POSTS_LIST_REQUEST,
    POST_UPLOADING_SUCCESS,
    POST_UPLOADING_FAILURE,
    POST_UPLOADING_REQUEST,
    POST_DETAIL_LOADING_SUCCESS,
    POST_DETAIL_LOADING_FAILURE,
    POST_DETAIL_LOADING_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE,
    POST_DELETE_REQUEST,
    POST_EDIT_LOADING_SUCCESS,
    POST_EDIT_LOADING_FAILURE,
    POST_EDIT_UPLOADING_SUCCESS,
    POST_EDIT_UPLOADING_FAILURE,
    POST_EDIT_UPLOADING_REQUEST,
    POST_EDIT_LOADING_REQUEST,
} from '../../types';

//All Posts load

function* loadPosts(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POSTS_LIST_SUCCESS,
            payload: {
                totalItems: 1,
                postdata: [
                    {
                        views: 6,
                        fileUrl: 'https://source.unsplash.com/random/301x201',
                        category: 1,
                        date: '2021-03-30 03:43',
                        comments: [],
                        _id: '123',
                        title: '안녕하세요',
                        contents: '<p>ㅇㅇ</p>',
                        writer: '1234',
                        writerName: '김진석',
                        numberId: 3,
                    },
                ],
                totalPages: 1,
                currentPage: 1,
            },
        });
    } catch (e) {
        yield put({
            type: POSTS_LIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchLoadPosts() {
    yield takeEvery(POSTS_LIST_REQUEST, loadPosts);
}

// Post Upload

function* uploadPosts(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POST_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: POST_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchuploadPosts() {
    yield takeEvery(POST_UPLOADING_REQUEST, uploadPosts);
}

// Post Detail

function* loadPostDetail(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POST_DETAIL_LOADING_SUCCESS,
            payload: {
                views: 7,
                fileUrl: 'https://source.unsplash.com/random/301x201',
                category: 1,
                date: '2021-03-30 03:43',
                comments: [],
                _id: '123',
                title: '안녕하세요',
                contents: '<p>test</p>',
            },
        });
    } catch (e) {
        yield put({
            type: POST_DETAIL_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchloadPostDetail() {
    yield takeEvery(POST_DETAIL_LOADING_REQUEST, loadPostDetail);
}

// Post Delete

function* DeletePost(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POST_DELETE_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: POST_DELETE_FAILURE,
            payload: false,
        });
    }
}

export function* watchDeletePost() {
    yield takeEvery(POST_DELETE_REQUEST, DeletePost);
}

// Post Edit Load

function* PostEditLoad(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POST_EDIT_LOADING_SUCCESS,
            payload: {
                views: 7,
                fileUrl: 'https://source.unsplash.com/random/301x201',
                category: 1,
                date: '2021-03-30 03:43',
                comments: [],
                _id: '123',
                title: '안녕하세요',
                contents: '<p>test</p>',
            },
        });
    } catch (e) {
        yield put({
            type: POST_EDIT_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchPostEditLoad() {
    yield takeEvery(POST_EDIT_LOADING_REQUEST, PostEditLoad);
}

// Post Edit UpLoad

function* PostEditUpload(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: POST_EDIT_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: POST_EDIT_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchPostEditUpload() {
    yield takeEvery(POST_EDIT_UPLOADING_REQUEST, PostEditUpload);
}
