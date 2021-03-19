import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
    PHOTO_UPLOADING_REQUEST,
    PHOTO_UPLOADING_SUCCESS,
    PHOTO_UPLOADING_FAILURE,
    // MEMBER_LIST_REQUEST,
    // MEMBER_LIST_SUCCESS,
    // MEMBER_LIST_FAILURE,
    // MEMBER_DELETE_REQUEST,
    // MEMBER_DELETE_SUCCESS,
    // MEMBER_DELETE_FAILURE,
    // MEMBER_SINGLELIST_REQUEST,
    // MEMBER_SINGLELIST_SUCCESS,
    // MEMBER_SINGLELIST_FAILURE,
    // MEMBER_UPDATELIST_REQUEST,
    // MEMBER_UPDATELIST_SUCCESS,
    // MEMBER_UPDATELIST_FAILURE,
} from '../types';

// uploading

const photoruploadAPI = (photoData) => {
    console.log(photoData, 'photoData');

    return axios.post('api/photo', photoData);
};

function* photoUpload(action) {
    try {
        const result = yield call(photoruploadAPI, action.payload);
        console.log(result);
        yield put({
            type: PHOTO_UPLOADING_SUCCESS,
            payload: result.data,
        });
        yield all([
            put(push('/photolist')),
        ]);
    } catch (e) {
        yield put({
            type: PHOTO_UPLOADING_FAILURE,
            payload: e.response,
        });
        yield put(alert('업로드 실패.'));
    }
}

function* watchphotoUpload() {
    yield takeEvery(PHOTO_UPLOADING_REQUEST, photoUpload);
}


export default function* photoSaga() {
    yield all([fork(watchphotoUpload),]);
}