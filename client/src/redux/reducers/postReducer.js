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
} from '../types';

const initialState = {
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

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POSTS_LIST_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                postdata: action.payload.postdata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                postDetail: '',
                writerId: '',
                title: '',
                loading: false,
            };
        case POSTS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                totalItems: '',
                postdata: '',
                totalPages: '',
                currentPage: '',
            };
        case POST_UPLOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_UPLOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                postDetail: '',
                writerId: '',
                title: '',
            };
        case POST_UPLOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case POST_DETAIL_LOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_DETAIL_LOADING_SUCCESS:
            return {
                ...state,
                postDetail: action.payload,
                writerId: action.payload.writer._id,
                title: action.payload.title,
                loading: false,
            };
        case POST_DETAIL_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case POST_EDIT_LOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_EDIT_LOADING_SUCCESS:
            return {
                ...state,
                postDetail: action.payload,
                loading: false,
                postDetail: '',
                writerId: '',
                title: '',
            };
        case POST_EDIT_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case POST_EDIT_UPLOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_EDIT_UPLOADING_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isAuthenticated: true,
                loading: false,
                postDetail: '',
                writerId: '',
                title: '',
            };
        case POST_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default postReducer;
