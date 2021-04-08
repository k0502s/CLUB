import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchLoadComments, watchUpLoadComments } from '../mock/MockcommentSaga';
import commentReducer from '../mock/MockcommentReducer';
import {
    COMMENT_LOADING_FAILURE,
    COMMENT_LOADING_SUCCESS,
    COMMENT_LOADING_REQUEST,
    COMMENT_UPLOADING_SUCCESS,
    COMMENT_UPLOADING_REQUEST,
    COMMENT_UPLOADING_FAILURE,
} from '../../types';

const state = {
    comments: [],
    creatorId: '',
    loading: false,
    isAuthenticated: false,
    commentdate: '',
};

describe('redux saga test', () => {
    it('댓글 불러오기 성공 => ', () => {
        const data = {
            date: '2021-03-30 03:21:06',
            _id: '1234',
            contents: '댓글 테스트',
            writer: '12345',
            writerName: '김진석',
            post: '12345',
        };
        return expectSaga(watchLoadComments)
            .withReducer(commentReducer)
            .dispatch({ type: COMMENT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: COMMENT_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                comments: {
                    date: '2021-03-30 03:21:06',
                    _id: '1234',
                    contents: '댓글 테스트',
                    writer: '12345',
                    writerName: '김진석',
                    post: '12345',
                },
                commentdate: '2021-03-30 03:21:06',
                loading: false,
            })
            .silentRun();
    });
    it('댓글 불러오기 실패 => ', () => {
        const data = {
            date: '2021-03-30 03:21:06',
            _id: '1234',
            contents: '댓글 테스트',
            writer: '12345',
            writerName: '김진석',
            post: '12345',
        };
        const error = new Error('Whoops');
        return expectSaga(watchLoadComments)
            .withReducer(commentReducer)
            .dispatch({ type: COMMENT_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: COMMENT_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                loading: false,
            })
            .silentRun();
    });

    it('댓글 업로드 성공 => ', () => {
        const data =  {
            contents: '테스트 댓글',
            writer: '1234',
            writerName: '김진석',
            post: '12345',
            responseTo: '4321',
            date: '2021-03-30 03:21:06',
        }
        return expectSaga(watchUpLoadComments)
            .withReducer(commentReducer)
            .dispatch({ type: COMMENT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: COMMENT_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                comments: [
                    {
                        contents: '테스트 댓글',
                        writer: '1234',
                        writerName: '김진석',
                        post: '12345',
                        responseTo: '4321',
                        date: '2021-03-30 03:21:06',
                    },
                ],
                isAuthenticated: true,
                loading: false,
            })
            .silentRun();
    });
    it('댓글 업로드 실패 => ', () => {
        const data =  {
            contents: '테스트 댓글',
            writer: '1234',
            writerName: '김진석',
            post: '12345',
            responseTo: '4321',
            date: '2021-03-30 03:21:06',
        }
        const error = new Error('Whoops');
        return expectSaga(watchUpLoadComments)
            .withReducer(commentReducer)
            .dispatch({ type: COMMENT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: COMMENT_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                loading: false,
            })
            .silentRun();
    });
});
