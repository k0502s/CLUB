import axios from 'axios';
import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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
} from '../types';

//All Posts load

const loadPostAPI = (postData) => {
    return axios.get(`/api/post/posts`, postData);
};

function* loadPosts(action) {
    try {
        const result = yield call(loadPostAPI, action.payload);
        console.log(result, 'loadPosts');
        yield put({
            type: POSTS_LIST_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: POSTS_LIST_FAILURE,
            payload: e,
        });
    }
}

function* watchLoadPosts() {
    yield takeEvery(POSTS_LIST_REQUEST, loadPosts);
}

// Post Upload

const uploadPostAPI = (payload) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const token = payload.token;
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return axios.post('/api/post', payload, config);
};

function* uploadPosts(action) {
    try {
        console.log(action, 'uploadPost function');
        const result = yield call(uploadPostAPI, action.payload);
        console.log(result, 'uploadPostAPI, action.payload');
        yield put({
            type: POST_UPLOADING_SUCCESS,
            payload: result.data,
        });
        yield put(push(`/post/${result.data._id}`));
    } catch (e) {
        yield put({
            type: POST_UPLOADING_FAILURE,
            payload: e,
        });
        yield put(push('/'));
    }
}

function* watchuploadPosts() {
    yield takeEvery(POST_UPLOADING_REQUEST, uploadPosts);
}

// Post Detail
const loadPostDetailAPI = (payload) => {
    console.log(payload);
    return axios.get(`/api/post/${payload}`);
};

function* loadPostDetail(action) {
    try {
        console.log(action);
        const result = yield call(loadPostDetailAPI, action.payload);
        console.log(result, 'post_detail_saga_data');
        yield put({
            type: POST_DETAIL_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: POST_DETAIL_LOADING_FAILURE,
            payload: e,
        });
        yield put(push('/'));
    }
}

function* watchloadPostDetail() {
    yield takeEvery(POST_DETAIL_LOADING_REQUEST, loadPostDetail);
}

// Post Delete

const DeletePostAPI = (payload) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const token = payload.token;

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return axios.delete(`/api/post/${payload.id}`, config);
};

function* DeletePost(action) {
    try {
        const result = yield call(DeletePostAPI, action.payload);
        yield put({
            type: POST_DELETE_SUCCESS,
            payload: result.data,
        });
        yield put(push('/'));
    } catch (e) {
        yield put({
            type: POST_DELETE_FAILURE,
            payload: e,
        });
    }
}

function* watchDeletePost() {
    yield takeEvery(POST_DELETE_REQUEST, DeletePost);
}

// Post Edit Load
const PostEditLoadAPI = (payload) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const token = payload.token;

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return axios.get(`/api/post/${payload.id}/edit`, config);
};

function* PostEditLoad(action) {
    try {
        const result = yield call(PostEditLoadAPI, action.payload);
        yield put({
            type: POST_EDIT_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: POST_EDIT_LOADING_FAILURE,
            payload: e,
        });
        yield put(push('/'));
    }
}

function* watchPostEditLoad() {
    yield takeEvery(POST_EDIT_LOADING_REQUEST, PostEditLoad);
}

// Post Edit UpLoad
const PostEditUploadAPI = (payload) => {
    console.log(payload, 'editpost');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const token = payload.token;

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return axios.post(`/api/post/${payload.id}/edit`, payload, config);
};

function* PostEditUpload(action) {
    try {
        const result = yield call(PostEditUploadAPI, action.payload);
        yield put({
            type: POST_EDIT_UPLOADING_SUCCESS,
            payload: result.data,
        });
        yield put(push(`/post/${result.data.id}`));
    } catch (e) {
        yield put({
            type: POST_EDIT_UPLOADING_FAILURE,
            payload: e,
        });
    }
}

function* watchPostEditUpload() {
    yield takeEvery(POST_EDIT_UPLOADING_REQUEST, PostEditUpload);
}

export default function* postSaga() {
    yield all([fork(watchLoadPosts), fork(watchuploadPosts), fork(watchloadPostDetail), fork(watchDeletePost), fork(watchPostEditLoad), fork(watchPostEditUpload)]);
}
