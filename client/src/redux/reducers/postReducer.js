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
    isLoading: '',
    error: '',
    writerId: '',
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                postdata: ''
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
                isLoading: false,
            };
        case POSTS_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                totalItems: '',
                postdata: '',
                totalPages: '',
                currentPage: '',
            };
        case POST_UPLOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case POST_UPLOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                postDetail: '',
                writerId: '',
                title: '',
            };
        case POST_UPLOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case POST_DETAIL_LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
                postdata: ''
            };
        case POST_DETAIL_LOADING_SUCCESS:
            return {
                ...state,
                postDetail: action.payload,
                writerId: action.payload.writer._id,
                title: action.payload.title,
                isLoading: false,
            };
        case POST_DETAIL_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                postdata: ''
            };
        case POST_EDIT_LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
                postdata: ''
            };
        case POST_EDIT_LOADING_SUCCESS:
            return {
                ...state,
                postDetail: action.payload,
                isLoading: false,
                writerId: '',
                title: '',
            };
        case POST_EDIT_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case POST_EDIT_UPLOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case POST_EDIT_UPLOADING_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case POST_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default postReducer;
