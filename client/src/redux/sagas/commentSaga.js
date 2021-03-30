import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
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
} from '../types';
import { push } from 'connected-react-router';

// Load Comment

const loadCommentsAPI = (payload) => {
    console.log(payload, 'loadCommentAPI ID');
    return axios.get(`/api/post/${payload}/comments`);
};

function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.payload);
        console.log(result);
        yield put({
            type: COMMENT_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENT_LOADING_FAILURE,
            payload: e,
        });
        yield push('/');
    }
}

function* watchLoadComments() {
    yield takeEvery(COMMENT_LOADING_REQUEST, loadComments);
}


// UpLoad Comment

const uploadCommentsAPI = (payload) => {
    console.log(payload.id, 'loadCommentAPI ID');
    return axios.post(`/api/post/${payload.id}/comments`, payload);
};

function* uploadComments(action) {
    try {
        console.log(action);
        const result = yield call(uploadCommentsAPI, action.payload);
        console.log(result, 'UploadComment');
        yield put({
            type: COMMENT_UPLOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: COMMENT_UPLOADING_FAILURE,
            payload: e,
        });
        yield push('/');
    }
}

function* watchUpLoadComments() {
    yield takeEvery(COMMENT_UPLOADING_REQUEST, uploadComments);
}



// Edit Comment

const editCommentsAPI = (payload) => {
    console.log(payload, 'edit data');
    return axios.post('/api/post/comment/edit', payload);
};

function* editComments(action) {
    try {
        console.log(action);
        const result = yield call(editCommentsAPI, action.payload);
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
        yield push('/');
    }
}

function* watchEditComments() {
    yield takeEvery(COMMENT_EDIT_UPLOADING_REQUEST, editComments);
}

// Delete Comment

const deleteCommentsAPI = (payload) => {
    console.log(payload, 'delete data');
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // };
    // const token = payload.token;

    // if (token) {
    //     config.headers['x-auth-token'] = token;
    // }
    return axios.post('/api/post/comment/delete', payload);
};

function* deleteComments(action) {
    try {
        console.log(action);
        const result = yield call(deleteCommentsAPI, action.payload);
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
        yield push('/');
    }
}

function* watchDeleteComments() {
    yield takeEvery(COMMENT_DELETE_REQUEST, deleteComments);
}

export default function* commentSaga() {
    yield all([fork(watchLoadComments), fork(watchUpLoadComments), fork(watchEditComments), fork(watchDeleteComments), 
  
    ]);
}
