import '@babel/polyfill';
import api from './api';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    COMMENT_LOADING_FAILURE,
    COMMENT_LOADING_SUCCESS,
    COMMENT_LOADING_REQUEST,
    COMMENT_UPLOADING_SUCCESS,
    COMMENT_UPLOADING_REQUEST,
    COMMENT_UPLOADING_FAILURE,
    COMMENT_EDIT_UPLOADING_REQUEST,
    COMMENT_EDIT_UPLOADING_SUCCESS,
    COMMENT_EDIT_UPLOADING_FAILURE,
    COMMENT_DELETE_REQUEST,
    COMMENT_DELETE_SUCCESS,
    COMMENT_DELETE_FAILURE,
} from '../../types';


// Load Comment

function* loadComments(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: COMMENT_LOADING_SUCCESS,
            payload: {
                date: '2021-03-30 03:21:06',
                _id: '1234',
                contents: '댓글 테스트',
                writer: '12345',
                writerName: '김진석',
                post: '12345',
            },
        });
    } catch (e) {
        yield put({
            type: COMMENT_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchLoadComments() {
    yield takeEvery(COMMENT_LOADING_REQUEST, loadComments);
}


// UpLoad Comment


function* uploadComments(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: COMMENT_UPLOADING_SUCCESS,
            payload:  {
                contents: '테스트 댓글',
                writer: '1234',
                writerName: '김진석',
                post: '12345',
                responseTo: '4321',
                date: '2021-03-30 03:21:06',
            },
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENT_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchUpLoadComments() {
    yield takeEvery(COMMENT_UPLOADING_REQUEST, uploadComments);
}



// Edit Comment


function* editComments(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result, 'EditComment');
        yield put({
            type: COMMENT_EDIT_UPLOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENT_EDIT_UPLOADING_FAILURE,
            payload: e,
        });
    }
}

export function* watchEditComments() {
    yield takeEvery(COMMENT_EDIT_UPLOADING_REQUEST, editComments);
}

// Delete Comment

function* deleteComments(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result, 'delete');
        yield put({
            type: COMMENT_DELETE_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENT_DELETE_FAILURE,
            payload: e,
        });
    }
}

export function* watchDeleteComments() {
    yield takeEvery(COMMENT_DELETE_REQUEST, deleteComments);
}


