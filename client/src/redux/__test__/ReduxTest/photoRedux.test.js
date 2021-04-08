import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchphotoUpload, watchPhotoList, watchBestImages, watchBestPhotoList, watchPhotoDetail, watchPhotoDelete, watchPhotoEditLoad, watchPhotoUpdate } from '../mock/MockphotoSaga';
import photoReducer from '../mock/MockphotoReducer';
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

const state = {
    errorMsg: '',
    isLoading: '',
    success: '',
    totalItems: '',
    photodata: '',
    totalPages: '',
    currentPage: '',
    bestphotodata: '',
    bestimages: '',
    detailphoto: '',
    detailimages: '',
    writerName: '',
    writerId: '',
};

describe('redux saga test', () => {
    it('포토 올리기 성공 => ', () => {
        const data = true;
        return expectSaga(watchphotoUpload)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                success: true,
                isLoading: false,
            })
            .silentRun();
    });
    it('포토 올리기 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchphotoUpload)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                success: false,
                isLoading: false,
            })
            .silentRun();
    });

    it('포토 리스트 가져오기 성공 => ', () => {
        const data = {
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
        };
        return expectSaga(watchPhotoList)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_LIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
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
                detailphoto: '',
                isLoading: false,
            })
            .silentRun();
    });
    it('포토 리스트 가져오기 실패 => ', () => {
        const data = {
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
        };
        const error = new Error('Whoops');
        return expectSaga(watchPhotoList)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_LIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
                totalItems: '',
                photodata: '',
                totalPages: '',
                currentPage: '',
            })
            .silentRun();
    });

    it('베스트 포토 가져오기 성공 => ', () => {
        const data = [
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
        ];
        return expectSaga(watchBestImages)
            .withReducer(photoReducer)
            .dispatch({ type: BESTPHOTO_IMAGES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: BESTPHOTO_IMAGES_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isLoading: false,
                bestimages: [
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
            })
            .silentRun();
    });
    it('베스트 포토 가져오기 실패 => ', () => {
        const data = [
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
        ];
        const error = new Error('Whoops');
        return expectSaga(watchBestImages)
            .withReducer(photoReducer)
            .dispatch({ type: BESTPHOTO_IMAGES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: BESTPHOTO_IMAGES_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
                bestimages: '',
            })
            .silentRun();
    });

    it('베스트 포토 리스트 가져오기 성공 => ', () => {
        const data = [
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
        ];
        return expectSaga(watchBestPhotoList)
            .withReducer(photoReducer)
            .dispatch({ type: BESTPHOTO_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: BESTPHOTO_LIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                totalItems: 1,
                bestphotodata: [
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
                totalPages: 1,
                currentPage: 1,
                detailphoto: '',
                isLoading: false,
            })
            .silentRun();
    });
    it('베스트 포토 리스트 가져오기 실패 => ', () => {
        const data = [
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
        ];
        const error = new Error('Whoops');
        return expectSaga(watchBestPhotoList)
            .withReducer(photoReducer)
            .dispatch({ type: BESTPHOTO_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: BESTPHOTO_LIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
                totalItems: '',
                bestphotodata: '',
                totalPages: '',
                currentPage: '',
            })
            .silentRun();
    });

    it('디테일 포토 데이터 가져오기 성공 => ', () => {
        const data = {
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
        };
        return expectSaga(watchPhotoDetail)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_DERAIL_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_DERAIL_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                detailphoto: {
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
                writerName: '12345',
                writerId: '1234',
                isLoading: false,
            })
            .silentRun();
    });
    it('디테일 포토 데이터 가져오기 실패 => ', () => {
        const data = {
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
        };
        const error = new Error('Whoops');
        return expectSaga(watchPhotoDetail)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_DERAIL_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_DERAIL_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
                detailphoto: '',
                writerName: '',
                writerId: '',
            })
            .silentRun();
    });
    it('포토 삭제 성공 => ', () => {
        const data = true;
        return expectSaga(watchPhotoDelete)
            .dispatch({ type: PHOTO_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_DELETE_SUCCESS, payload: data })
            .silentRun();
    });
    it('포토 삭제 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchPhotoDelete)
            .dispatch({ type: PHOTO_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_DELETE_FAILURE, payload: false })
            .silentRun();
    });

    it('포토 편집 데이터 가져오기 성공 => ', () => {
        const data = [
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
        ];
        return expectSaga(watchPhotoEditLoad)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_EDIT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_EDIT_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                detailphoto: [
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
                detailimages: [['detailimage1']],
                isLoading: false,
            })
            .silentRun();
    });
    it('포토 편집 데이터 가져오기 실패 => ', () => {
        const data = [
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
        ];
        const error = new Error('Whoops');
        return expectSaga(watchPhotoEditLoad)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_EDIT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_EDIT_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
                detailphoto: '',
                detailimages: '',
            })
            .silentRun();
    });

    it('포토 편집 성공 => ', () => {
        const data = true;
        return expectSaga(watchPhotoUpdate)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PHOTO_EDIT_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                detailphoto: '',
                isLoading: false,
            })
            .silentRun();
    });
    it('포토 편집 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchPhotoUpdate)
            .withReducer(photoReducer)
            .dispatch({ type: PHOTO_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PHOTO_EDIT_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                errorMsg: 'error',
            })
            .silentRun();
    });
});
