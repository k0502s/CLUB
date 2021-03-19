import {
    PHOTO_UPLOADING_REQUEST,
    PHOTO_UPLOADING_SUCCESS,
    PHOTO_UPLOADING_FAILURE,
    // MEMBER_LIST_REQUEST,
    // MEMBER_LIST_SUCCESS,
    // MEMBER_LIST_FAILURE,
    // MEMBER_DELETE_REQUEST,
    // MEMBER_DELETE_SUCCESS,
    // MEMBER_DELETE_FAILURE,
    // MEMBER_SINGLELIST_REQUEST,
    // MEMBER_SINGLELIST_SUCCESS,
    // MEMBER_SINGLELIST_FAILURE,
    // MEMBER_UPDATELIST_REQUEST,
    // MEMBER_UPDATELIST_SUCCESS,
    // MEMBER_UPDATELIST_FAILURE,
} from '../types';

const initialState = {
    errorMsg: '',
    isLoading: '',
    success: '',
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTO_UPLOADING_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case PHOTO_UPLOADING_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
            };
        case PHOTO_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: action.payload.success,
            };

        default:
            return state;
    }
};

export default photoReducer;