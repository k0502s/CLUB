import { call, put, takeEvery } from 'redux-saga/effects';
import '@babel/polyfill';
import api from './api';
import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAILURE,
    USER_LOADING_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    CLEAR_ERROR_SUCCESS,
    CLEAR_ERROR_FAILURE,
    CLEAR_ERROR_REQUEST,
    PASSWORD_EDIT_UPLOADING_SUCCESS,
    PASSWORD_EDIT_UPLOADING_REQUEST,
    PASSWORD_EDIT_UPLOADING_FAILURE,
} from '../../types';
// Login

function* loginUser(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                token: 'test1234',
                user: {
                    id: '1234',
                    name: '김진석',
                    email: 'k0502s@naver.com',
                    role: 'User',
                },
            },
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: false,
        });
    }
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
}

// LOGOUT

function* logout(action) {
    try {
        const result = yield call(api.fetchTest);
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LOGOUT_FAILURE,
        });
        console.log(e);
    }
}

export function* watchlogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

// Register

function* registerUser(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: REGISTER_SUCCESS,
            payload: {
                token: 'test1234',
                user: {
                    id: '1234',
                    name: '김진석',
                    email: 'k0502s@naver.com',
                    camera: 'A7S2',
                    sex: 1,
                },
            },
        });
    } catch (e) {
        yield put({
            type: REGISTER_FAILURE,
            payload: false,
        });
    }
}

export function* watchregisterUser() {
    yield takeEvery(REGISTER_REQUEST, registerUser);
}

// clear Error

function* clearError() {
    try {
        yield put({
            type: CLEAR_ERROR_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: CLEAR_ERROR_FAILURE,
        });
        console.error(e);
    }
}

export function* watchclearError() {
    yield takeEvery(CLEAR_ERROR_REQUEST, clearError);
}

// User Loading

function* userLoading(action) {
    try {
        console.log(action, 'userLoading');
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: {
                user: {
                    id: '1234',
                    name: '김진석',
                    email: 'k0502s@naver.com',
                },
            },
        });
    } catch (e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchuserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

// Edit Password

function* EditPassword(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: PASSWORD_EDIT_UPLOADING_SUCCESS,
            payload: { success: '비밀번호 업데이트에 성공했습니다' },
        });
    } catch (e) {
        yield put({
            type: PASSWORD_EDIT_UPLOADING_FAILURE,
            payload: { fail_msg: '새로운 비밀번호가 일치하지 않습니다' },
        });
    }
}

export function* watchEditPassword() {
    yield takeEvery(PASSWORD_EDIT_UPLOADING_REQUEST, EditPassword);
}
