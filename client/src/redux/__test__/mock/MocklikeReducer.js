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

const initialState = {
    uplikes: '',
    unlikes: '',
    updislike: '',
    undislike: '',
};

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_UP_REQUEST:
            return {
                ...state,
            };
        case LIKE_UP_SUCCESS:
            return {
                ...state,
                uplike: true,
            };
        case LIKE_UP_FAILURE:
            return {
                ...state,
                uplike: '',
            };
        case LIKE_UN_REQUEST:
            return {
                ...state,
            };
        case LIKE_UN_SUCCESS:
            return {
                ...state,
                unlike: true,
            };
        case LIKE_UN_FAILURE:
            return {
                ...state,
                unlike: '',
            };
        case DISLIKE_UP_REQUEST:
            return {
                ...state,
            };
        case DISLIKE_UP_SUCCESS:
            return {
                ...state,
                updislike: true,
            };
        case DISLIKE_UP_FAILURE:
            return {
                ...state,
                updislike: '',
            };
        case DISLIKE_UN_REQUEST:
            return {
                ...state,
            };
        case DISLIKE_UN_SUCCESS:
            return {
                ...state,
                undislike: true,
            };
        case DISLIKE_UN_FAILURE:
            return {
                ...state,
                undislike: '',
            };

        default:
            return state;
    }
};

export default likeReducer;
