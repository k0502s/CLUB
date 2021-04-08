import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchChat } from '../mock/MockchatSaga';
import chatReducer from '../mock/MockchatReducer';
import { CHAT_FAILURE, CHAT_SUCCESS, CHAT_REQUEST, CHAT_RESET_REQUEST, CHAT_RESET_SUCCESS, CHAT_RESET_FAILURE } from '../../types';

const state = {
    messages: [],
};

describe('redux saga test', () => {
    it('채팅 메세지 전송 성공 => ', () => {
        const data = {msg: '안녕하세요'};
        return expectSaga(watchChat)
            .withReducer(chatReducer)
            .dispatch({ type: CHAT_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: CHAT_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                messages: ['안녕하세요'],
            })
            .silentRun();
    });
    it('채팅 메세지 전송 실패 => ', () => {
        const data = {msg: '안녕하세요'};
        const error = new Error('Whoops');
        return expectSaga(watchChat)
            .withReducer(chatReducer)
            .dispatch({ type: CHAT_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: CHAT_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                messages: [],
            })
            .silentRun();
    });
});
