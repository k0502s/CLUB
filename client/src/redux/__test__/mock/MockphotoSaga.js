import '@babel/polyfill';
import api from './api';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    PHOTO_UPLOADING_REQUEST,
    PHOTO_UPLOADING_SUCCESS,
    PHOTO_UPLOADING_FAILURE,
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAILURE,
    BESTPHOTO_LIST_REQUEST,
    BESTPHOTO_LIST_SUCCESS,
    BESTPHOTO_LIST_FAILURE,
    BESTPHOTO_IMAGES_REQUEST,
    BESTPHOTO_IMAGES_SUCCESS,
    BESTPHOTO_IMAGES_FAILURE,
    PHOTO_DERAIL_REQUEST,
    PHOTO_DERAIL_SUCCESS,
    PHOTO_DERAIL_FAILURE,
    PHOTO_DELETE_REQUEST,
    PHOTO_DELETE_SUCCESS,
    PHOTO_DELETE_FAILURE,
    PHOTO_EDIT_UPLOADING_REQUEST,
    PHOTO_EDIT_UPLOADING_SUCCESS,
    PHOTO_EDIT_UPLOADING_FAILURE,
    PHOTO_EDIT_LOADING_REQUEST,
    PHOTO_EDIT_LOADING_SUCCESS,
    PHOTO_EDIT_LOADING_FAILURE,
} from '../../types';

// uploading

function* photoUpload(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: PHOTO_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchphotoUpload() {
    yield takeEvery(PHOTO_UPLOADING_REQUEST, photoUpload);
}

// list get

function* photoList(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_LIST_SUCCESS,
            payload: {
                totalItems: 1,
                photodata: [
                    {
                        images: ['image1'],
                        genres: 1,
                        views: 21,
                        date: '2021-03-30 04:44',
                        comments: [],
                        _id: '1234',
                        writer: '12345',
                        title: '도시의 야경',
                        description: '하늘 공원에서 보는 야경',
                        createdAt: '2021-03-30T07:53:13.252Z',
                        updatedAt: '2021-04-08T05:40:40.168Z',
                    },
                ],
                totalPages: 1,
                currentPage: 1,
            },
        });
    } catch (e) {
        yield put({
            type: PHOTO_LIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchPhotoList() {
    yield takeEvery(PHOTO_LIST_REQUEST, photoList);
}

// best list get

function* bestphotoList(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: BESTPHOTO_LIST_SUCCESS,
            payload: [
                {
                    images: ['bestimage1'],
                    genres: 1,
                    views: 12,
                    date: '2021-03-29 06:14',
                    comments: [],
                    _id: '60619acf85c84e156c9fb2e6',
                    writer: '60618eb5d690a00af08bd72a',
                    title: '월드컵 경기장',
                    description: '상암 동의 월드컵 경기장이다.',
                    createdAt: '2021-03-29T09:15:59.950Z',
                    updatedAt: '2021-03-30T10:07:37.281Z',
                },
            ],
        });
    } catch (e) {
        yield put({
            type: BESTPHOTO_LIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchBestPhotoList() {
    yield takeEvery(BESTPHOTO_LIST_REQUEST, bestphotoList);
}

// best Images get

function* bestImages(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: BESTPHOTO_IMAGES_SUCCESS,
            payload: [
                {
                    images: ['bestimage1'],
                    genres: 1,
                    views: 12,
                    date: '2021-03-29 06:14',
                    comments: [],
                    _id: '60619acf85c84e156c9fb2e6',
                    writer: '60618eb5d690a00af08bd72a',
                    title: '월드컵 경기장',
                    description: '상암 동의 월드컵 경기장이다.',
                    createdAt: '2021-03-29T09:15:59.950Z',
                    updatedAt: '2021-03-30T10:07:37.281Z',
                },
            ],
        });
    } catch (e) {
        yield put({
            type: BESTPHOTO_IMAGES_FAILURE,
            payload: false,
        });
    }
}

export function* watchBestImages() {
    yield takeEvery(BESTPHOTO_IMAGES_REQUEST, bestImages);
}

// photo Detail

function* photoDetail(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_DERAIL_SUCCESS,
            payload: {
                totalItems: 1,
                photodata: [
                    {
                        images: ['detailimage1'],
                        genres: 1,
                        views: 21,
                        date: '2021-03-30 04:44',
                        comments: [],
                        _id: '1234',
                        writer: '12345',
                        title: '도시의 야경',
                        description: '하늘 공원에서 보는 야경',
                        createdAt: '2021-03-30T07:53:13.252Z',
                        updatedAt: '2021-04-08T05:40:40.168Z',
                    },
                ],
                totalPages: 1,
                currentPage: 1,
            },
        });
    } catch (e) {
        yield put({
            type: PHOTO_DERAIL_FAILURE,
            payload: false,
        });
    }
}

export function* watchPhotoDetail() {
    yield takeEvery(PHOTO_DERAIL_REQUEST, photoDetail);
}

// photo Delete

function* photoDelete(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_DELETE_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: PHOTO_DELETE_FAILURE,
            payload: false,
        });
    }
}

export function* watchPhotoDelete() {
    yield takeEvery(PHOTO_DELETE_REQUEST, photoDelete);
}

// Photo Edit Load

function* photoEditLoad(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_EDIT_LOADING_SUCCESS,
            payload: [
                {
                    images: ['detailimage1'],
                    genres: 1,
                    views: 21,
                    date: '2021-03-30 04:44',
                    comments: [],
                    _id: '1234',
                    writer: '12345',
                    title: '도시의 야경',
                    description: '하늘 공원에서 보는 야경',
                    createdAt: '2021-03-30T07:53:13.252Z',
                    updatedAt: '2021-04-08T05:40:40.168Z',
                },
            ],
        });
    } catch (e) {
        yield put({
            type: PHOTO_EDIT_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchPhotoEditLoad() {
    yield takeEvery(PHOTO_EDIT_LOADING_REQUEST, photoEditLoad);
}

// Photo Edit Upload

function* photoUpdate(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PHOTO_EDIT_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: PHOTO_EDIT_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchPhotoUpdate() {
    yield takeEvery(PHOTO_EDIT_UPLOADING_REQUEST, photoUpdate);
}
