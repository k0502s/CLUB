import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchLoadPosts, watchuploadPosts, watchloadPostDetail, watchPostEditLoad, watchPostEditUpload, watchDeletePost } from '../mock/MockpostSaga';
import postReducer from '../mock/MockpostReducer';
import {
    POSTS_LIST_REQUEST,
    POSTS_LIST_SUCCESS,
    POSTS_LIST_FAILURE,
    POST_UPLOADING_REQUEST,
    POST_UPLOADING_SUCCESS,
    POST_UPLOADING_FAILURE,
    POST_DETAIL_LOADING_FAILURE,
    POST_DETAIL_LOADING_SUCCESS,
    POST_DETAIL_LOADING_REQUEST,
    POST_EDIT_LOADING_REQUEST,
    POST_EDIT_LOADING_SUCCESS,
    POST_EDIT_LOADING_FAILURE,
    POST_EDIT_UPLOADING_REQUEST,
    POST_EDIT_UPLOADING_SUCCESS,
    POST_EDIT_UPLOADING_FAILURE,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE,
    POST_DELETE_REQUEST,
} from '../../types';

const state = {
    isAuthenticated: null,
    totalItems: '',
    postdata: '',
    totalPages: '',
    currentPage: '',
    postDetail: '',
    loading: false,
    error: '',
    writerId: '',
};

describe('redux saga test', () => {
    it('게시판 리스트 불러오기 성공 => ', () => {
        const data = {
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
        };
        return expectSaga(watchLoadPosts)
            .withReducer(postReducer)
            .dispatch({ type: POSTS_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POSTS_LIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
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
                postDetail: '',
                writerId: '',
                title: '',
                loading: false,
            })
            .silentRun();
    });
    it('게시판 리스트 불러오기  실패 => ', () => {
        const data = {
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
        };
        const error = new Error('Whoops');
        return expectSaga(watchLoadPosts)
            .withReducer(postReducer)
            .dispatch({ type: POSTS_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POSTS_LIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                loading: false,
                totalItems: '',
                postdata: '',
                totalPages: '',
                currentPage: '',
            })
            .silentRun();
    });

    it('게시판 업로드 성공 => ', () => {
        const data = true;
        return expectSaga(watchuploadPosts)
            .withReducer(postReducer)
            .dispatch({ type: POST_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POST_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                loading: false,
                postDetail: '',
                writerId: '',
                title: '',
            })
            .silentRun();
    });
    it('게시판 업로드 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchuploadPosts)
            .withReducer(postReducer)
            .dispatch({ type: POST_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POST_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                error: false,
                loading: false,
            })
            .silentRun();
    });

    it('게시판 디테일 불러오기 성공 => ', () => {
        const data = {
            views: 7,
            fileUrl: 'https://source.unsplash.com/random/301x201',
            category: 1,
            date: '2021-03-30 03:43',
            comments: [],
            _id: '123',
            title: '안녕하세요',
            contents: '<p>test</p>',
        };
        return expectSaga(watchloadPostDetail)
            .withReducer(postReducer)
            .dispatch({ type: POST_DETAIL_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POST_DETAIL_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                postDetail: {
                    views: 7,
                    fileUrl: 'https://source.unsplash.com/random/301x201',
                    category: 1,
                    date: '2021-03-30 03:43',
                    comments: [],
                    _id: '123',
                    title: '안녕하세요',
                    contents: '<p>test</p>',
                },
                writerId: '1234',
                title: '안녕하세요',
                loading: false,
            })
            .silentRun();
    });
    it('게시판 디테일 불러오기 실패 => ', () => {
        const data = {
            views: 7,
            fileUrl: 'https://source.unsplash.com/random/301x201',
            category: 1,
            date: '2021-03-30 03:43',
            comments: [],
            _id: '123',
            title: '안녕하세요',
            contents: '<p>test</p>',
        };
        const error = new Error('Whoops');
        return expectSaga(watchloadPostDetail)
            .withReducer(postReducer)
            .dispatch({ type: POST_DETAIL_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POST_DETAIL_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                error: false,
                loading: false,
            })
            .silentRun();
    });

    it('게시판 편집 데이터 불러오기 성공 => ', () => {
        const data = {
            views: 7,
            fileUrl: 'https://source.unsplash.com/random/301x201',
            category: 1,
            date: '2021-03-30 03:43',
            comments: [],
            _id: '123',
            title: '안녕하세요',
            contents: '<p>test</p>',
        };
        return expectSaga(watchPostEditLoad)
            .withReducer(postReducer)
            .dispatch({ type: POST_EDIT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POST_EDIT_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                postDetail: {
                    views: 7,
                    fileUrl: 'https://source.unsplash.com/random/301x201',
                    category: 1,
                    date: '2021-03-30 03:43',
                    comments: [],
                    _id: '123',
                    title: '안녕하세요',
                    contents: '<p>test</p>',
                },
                loading: false,
                writerId: '',
                title: '',
            })
            .silentRun();
    });
    it('게시판 편집 데이터 불러오기 실패 => ', () => {
        const data = {
            views: 7,
            fileUrl: 'https://source.unsplash.com/random/301x201',
            category: 1,
            date: '2021-03-30 03:43',
            comments: [],
            _id: '123',
            title: '안녕하세요',
            contents: '<p>test</p>',
        };
        const error = new Error('Whoops');
        return expectSaga(watchPostEditLoad)
            .withReducer(postReducer)
            .dispatch({ type: POST_EDIT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POST_EDIT_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                error: false,
                loading: false,
            })
            .silentRun();
    });

    it('게시판 편집 업로드 성공 => ', () => {
        const data = true;
        return expectSaga(watchPostEditUpload)
            .withReducer(postReducer)
            .dispatch({ type: POST_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POST_EDIT_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                posts: true,
                isAuthenticated: true,
                loading: false,
            })
            .silentRun();
    });
    it('게시판 편집 업로드 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchPostEditUpload)
            .withReducer(postReducer)
            .dispatch({ type: POST_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POST_EDIT_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                error: false,
                loading: false,
            })
            .silentRun();
    });

    it('게시판 삭제 성공 => ', () => {
        const data = true;
        return expectSaga(watchDeletePost)
            .dispatch({ type: POST_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: POST_DELETE_SUCCESS, payload: data })

            .silentRun();
    });
    it('게시판 삭제 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchDeletePost)
            .dispatch({ type: POST_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: POST_DELETE_FAILURE, payload: false })
            .silentRun();
    });
});
