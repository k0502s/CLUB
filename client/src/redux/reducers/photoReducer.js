import {
    PHOTO_UPLOADING_REQUEST,
    PHOTO_UPLOADING_SUCCESS,
    PHOTO_UPLOADING_FAILURE,
    PHOTO_LIST_REQUEST,
    PHOTO_LIST_SUCCESS,
    PHOTO_LIST_FAILURE,
    BESTPHOTO_LIST_REQUEST,
    BESTPHOTO_LIST_SUCCESS,
    BESTPHOTO_LIST_FAILURE,
    BESTPHOTO_IMAGES_REQUEST,
    BESTPHOTO_IMAGES_SUCCESS,
    BESTPHOTO_IMAGES_FAILURE,
    PHOTO_DERAIL_REQUEST,
    PHOTO_DERAIL_SUCCESS,
    PHOTO_DERAIL_FAILURE,
    PHOTO_EDIT_UPLOADING_REQUEST,
    PHOTO_EDIT_UPLOADING_SUCCESS,
    PHOTO_EDIT_UPLOADING_FAILURE,
    PHOTO_EDIT_LOADING_REQUEST,
    PHOTO_EDIT_LOADING_SUCCESS,
    PHOTO_EDIT_LOADING_FAILURE,
} from '../types';

const initialState = {
    errorMsg: '',
    isLoading: '',
    success: '',
    totalItems: '',
    photodata: '',
    totalPages: '',
    currentPage: '',
    bestphotodata: '',
    bestimages: '',
    detailphoto: '',
    detailimages: '',
    writerName: '',
    writerId: '',
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
                isLoading: false,
            };
        case PHOTO_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: action.payload.success,
                isLoading: false,
            };

        case PHOTO_LIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case PHOTO_LIST_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                photodata: action.payload.photodata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                detailphoto: '',
                isLoading: false,
            };
        case PHOTO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
                totalItems: '',
                photodata: '',
                totalPages: '',
                currentPage: '',
            };

        case BESTPHOTO_IMAGES_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case BESTPHOTO_IMAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bestimages: action.payload,
            };
        case BESTPHOTO_IMAGES_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
                bestimages: '',
            };
        case BESTPHOTO_LIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case BESTPHOTO_LIST_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                bestphotodata: action.payload.bestphotodata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                detailphoto: '',
                isLoading: false,
            };
        case BESTPHOTO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
                totalItems: '',
                bestphotodata: '',
                totalPages: '',
                currentPage: '',
            };

        case PHOTO_DERAIL_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case PHOTO_DERAIL_SUCCESS:
            return {
                ...state,
                detailphoto: action.payload,
                writerName: action.payload.writer.name,
                writerId: action.payload.writer._id,
                isLoading: false,
            };
        case PHOTO_DERAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
                detailphoto: '',
                writerName: '',
                writerId: '',
            };
        case PHOTO_EDIT_UPLOADING_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case PHOTO_EDIT_UPLOADING_SUCCESS:
            return {
                ...state,
                detailphoto: '',
                isLoading: false,
            };
        case PHOTO_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
            };
        case PHOTO_EDIT_LOADING_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case PHOTO_EDIT_LOADING_SUCCESS:
            return {
                ...state,
                detailphoto: action.payload,
                detailimages: action.payload.images,
                isLoading: false,
            };
        case PHOTO_EDIT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'error',
                detailphoto: '',
                detailimages: '',
            };

        default:
            return state;
    }
};

export default photoReducer;
