import { call, put, takeEvery } from 'redux-saga/effects';
import '@babel/polyfill';
import api from './api';
import { CHAT_FAILURE, CHAT_SUCCESS, CHAT_REQUEST, CHAT_RESET_REQUEST, CHAT_RESET_SUCCESS, CHAT_RESET_FAILURE } from '../../types';

// chat

function* chat(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: CHAT_SUCCESS,
            payload: {msg: '안녕하세요'},
        });
    } catch (e) {
        yield put({
            type: CHAT_FAILURE,
            payload: false,
        });
    }
}

export function* watchChat() {
    yield takeEvery(CHAT_REQUEST, chat);
}

function* chatrest() {
    try {
        yield put({
            type: CHAT_RESET_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: CHAT_RESET_FAILURE,
        });
        console.error(e);
    }
}

export function* watchchatrest() {
    yield takeEvery(CHAT_RESET_REQUEST, chatrest);
}
