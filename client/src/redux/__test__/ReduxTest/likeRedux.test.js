import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchLikeUp, watchUnLike, watchDisLikeUp, watchUndisLike } from '../mock/MocklikeSaga';
import likeReducer from '../mock/MocklikeReducer';
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

const state = {
    uplikes: '',
    unlikes: '',
    updislike: '',
    undislike: '',
};

describe('redux saga test', () => {
    it('종아요 올리기 성공 => ', () => {
        const data = true;
        return expectSaga(watchLikeUp)
            .withReducer(likeReducer)
            .dispatch({ type: LIKE_UP_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: LIKE_UP_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                uplike: true,
            })
            .silentRun();
    });
    it('종아요 올리기 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchLikeUp)
            .withReducer(likeReducer)
            .dispatch({ type: LIKE_UP_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: LIKE_UP_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                uplike: '',
            })
            .silentRun();
    });

    it('종아요 내리기 성공 => ', () => {
        const data = true;
        return expectSaga(watchUnLike)
            .withReducer(likeReducer)
            .dispatch({ type: LIKE_UN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: LIKE_UN_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                unlike: true,
            })
            .silentRun();
    });
    it('종아요 내리기 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchUnLike)
            .withReducer(likeReducer)
            .dispatch({ type: LIKE_UN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: LIKE_UN_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                unlike: '',
            })
            .silentRun();
    });

    it('싫어요 올리기 성공 => ', () => {
        const data = true;
        return expectSaga(watchDisLikeUp)
            .withReducer(likeReducer)
            .dispatch({ type: DISLIKE_UP_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: DISLIKE_UP_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                updislike: true,
            })
            .silentRun();
    });
    it('싫어요 올리기 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchDisLikeUp)
            .withReducer(likeReducer)
            .dispatch({ type: DISLIKE_UP_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: DISLIKE_UP_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                updislike: '',
            })
            .silentRun();
    });

    it('싫어요 내리기 성공 => ', () => {
        const data = true;
        return expectSaga(watchUndisLike)
            .withReducer(likeReducer)
            .dispatch({ type: DISLIKE_UN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: DISLIKE_UN_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                undislike: true,
            })
            .silentRun();
    });
    it('싫어요 내리기 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchUndisLike)
            .withReducer(likeReducer)
            .dispatch({ type: DISLIKE_UN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: DISLIKE_UN_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                undislike: '',
            })
            .silentRun();
    });
});
