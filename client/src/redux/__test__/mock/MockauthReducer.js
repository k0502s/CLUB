import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERROR_REQUEST,
    CLEAR_ERROR_SUCCESS,
    CLEAR_ERROR_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    USER_LOADING_REQUEST,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    PASSWORD_EDIT_UPLOADING_REQUEST,
    PASSWORD_EDIT_UPLOADING_SUCCESS,
    PASSWORD_EDIT_UPLOADING_FAILURE,
} from '../../types';

const initialState = {
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

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                errorMsg: '',
                errorMsg1: '',
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userName: '김진석',
                userId: '1234',
                userRole: 'User',
                errorMsg: '',
                errorMsg1: '',
            };
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
                errorMsg1: '',
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
                errorMsg1: '',
            };

        case REGISTER_REQUEST:
            return {
                ...state,
                errorMsg: '',
                errorMsg1: '',
                isLoading: true,
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userName: '김진석',
                userId: '1234',
                userRole: 'User',
                errorMsg: '',
                errorMsg1: '',
            };
        case REGISTER_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
                errorMsg1: '이미 가입된 유저가 존재합니다.',
            };
        case USER_LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADING_SUCCESS:
            return {
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
            };
        case USER_LOADING_FAILURE:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
            };

        case PASSWORD_EDIT_UPLOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case PASSWORD_EDIT_UPLOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                successMsg: '회원 정보 변경이 완료되었습니다.',
                // userName: action.payload.result.name,
                // userId: action.payload.result.id,
                // userRole: action.payload.result.role,
                errorMsg: '',
                previousMsg: '',
            };
        case PASSWORD_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                successMsg: '',
                errorMsg: '회원 정보 변경이 실패하였습니다.',
                previousMatchMsg: '비밀번호가 일치하지 않습니다.',
            };
        case CLEAR_ERROR_REQUEST:
            return {
                ...state,
            };
        case CLEAR_ERROR_SUCCESS:
            return {
                ...state,
                errorMsg: '',
                errorMsg1: '',
                previousMatchMsg: '',
            };
        case CLEAR_ERROR_FAILURE:
            return {
                ...state,
                errorMsg: 'Clear Error Fail',
                errorMsg1: 'Clear Error Fail',
                previousMatchMsg: 'Clear Error Fail',
            };

        default:
            return state;
    }
};

export default authReducer;
