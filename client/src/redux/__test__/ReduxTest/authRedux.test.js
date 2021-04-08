import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchLoginUser, watchlogout, watchregisterUser, watchuserLoading, watchEditPassword } from '../mock/MockauthSaga';
import authReducer from '../mock/MockauthReducer';
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
    PASSWORD_EDIT_UPLOADING_SUCCESS,
    PASSWORD_EDIT_UPLOADING_REQUEST,
    PASSWORD_EDIT_UPLOADING_FAILURE,
} from '../../types';

const state = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: '',
    userId: '',
    userName: '',
    userRole: '',
    errorMsg: '',
    errorMsg1: '',
    successMsg: '',
    previousMatchMsg: '',
};

describe('redux saga test', () => {
    it('로그인 성공 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        };
        return expectSaga(watchLoginUser)
            .withReducer(authReducer)
            .dispatch({ type: LOGIN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: LOGIN_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userId: '1234',
                userName: '김진석',
                userRole: 'User',
                errorMsg: '',
                errorMsg1: '',
            })
            .silentRun();
    });
    it('로그인 실패 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchLoginUser)
            .withReducer(authReducer)
            .dispatch({ type: LOGIN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: LOGIN_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
                errorMsg1: '',
            })
            .silentRun();
    });

    it('로그아웃 성공 => ', () => {
        return expectSaga(watchlogout)
            .withReducer(authReducer)
            .dispatch({ type: LOGOUT_REQUEST })
            .provide([[call(api.fetchTest), true]])
            .put({ type: LOGOUT_SUCCESS })
            .hasFinalState({
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
                errorMsg1: '',
            })
            .silentRun();
    });
    it('로그아웃 실패 => ', () => {
        const error = new Error('Whoops');
        return expectSaga(watchlogout)
            .withReducer(authReducer)
            .dispatch({ type: LOGOUT_REQUEST })
            .provide([[call(api.fetchTest), throwError(error)]])
            .put({ type: LOGOUT_FAILURE })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
                errorMsg1: '',
            })
            .silentRun();
    });

    it('회원가입 성공 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
                camera: 'A7S2',
                sex: 1,
            },
        };
        return expectSaga(watchregisterUser)
            .withReducer(authReducer)
            .dispatch({ type: REGISTER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: REGISTER_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userId: '1234',
                userRole: 'User',
                userName: '김진석',
                errorMsg: '',
                errorMsg1: '',
            })
            .silentRun();
    });
    it('회원가입 실패 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchregisterUser)
            .withReducer(authReducer)
            .dispatch({ type: REGISTER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: REGISTER_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
                errorMsg1: '이미 가입된 유저가 존재합니다.',
            })
            .silentRun();
    });

    it('유저 정보 가져오기 성공 => ', () => {
        const data = {
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        return expectSaga(watchuserLoading)
            .withReducer(authReducer)
            .dispatch({ type: USER_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: USER_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: {
                    id: '1234',
                    name: '김진석',
                    role: 'User',
                },
                userId: '1234',
                userName: '김진석',
                userRole: 'User',
            })
            .silentRun();
    });
    it('유저 정보 가져오기 실패 => ', () => {
        const data = {
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchuserLoading)
            .withReducer(authReducer)
            .dispatch({ type: USER_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: USER_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
            })
            .silentRun();
    });

    it('유저 정보 수정 성공 => ', () => {
        const data = { success: '비밀번호 업데이트에 성공했습니다' };
        return expectSaga(watchEditPassword)
            .withReducer(authReducer)
            .dispatch({ type: PASSWORD_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: PASSWORD_EDIT_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isLoading: false,
                successMsg: '회원 정보 변경이 완료되었습니다.',
                // userName: action.payload.result.name,
                // userId: action.payload.result.id,
                // userRole: action.payload.result.role,
                errorMsg: '',
                previousMsg: '',
            })
            .silentRun();
    });
    it('유저 정보 수정 실패 => ', () => {
        const data = { success: '비밀번호 업데이트에 성공했습니다' };
        const error = new Error('Whoops');
        return expectSaga(watchEditPassword)
            .withReducer(authReducer)
            .dispatch({ type: PASSWORD_EDIT_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: PASSWORD_EDIT_UPLOADING_FAILURE, payload: { fail_msg: '새로운 비밀번호가 일치하지 않습니다' } })
            .hasFinalState({
                ...state,
                isLoading: false,
                successMsg: '',
                errorMsg: '회원 정보 변경이 실패하였습니다.',
                previousMatchMsg: '비밀번호가 일치하지 않습니다.',
            })
            .silentRun();
    });
});
