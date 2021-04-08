import {
    COMMENT_LOADING_REQUEST,
    COMMENT_LOADING_SUCCESS,
    COMMENT_LOADING_FAILURE,
    COMMENT_UPLOADING_REQUEST,
    COMMENT_UPLOADING_SUCCESS,
    COMMENT_UPLOADING_FAILURE,
    COMMENT_EDIT_UPLOADING_REQUEST,
    COMMENT_EDIT_UPLOADING_SUCCESS,
    COMMENT_EDIT_UPLOADING_FAILURE,
    COMMENT_DELETE_REQUEST,
    COMMENT_DELETE_SUCCESS,
    COMMENT_DELETE_FAILURE,
} from '../../types';

const initialState = {
    comments: [],
    creatorId: '',
    loading: false,
    isAuthenticated: false,
    commentdate: '',
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_LOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case COMMENT_LOADING_SUCCESS:
            return {
                ...state,
                comments: {
                    date: '2021-03-30 03:21:06',
                    _id: '1234',
                    contents: '댓글 테스트',
                    writer: '12345',
                    writerName: '김진석',
                    post: '12345',
                },
                commentdate: '2021-03-30 03:21:06',
                loading: false,
            };
        case COMMENT_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case COMMENT_UPLOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case COMMENT_UPLOADING_SUCCESS:
            return {
                ...state,
                comments: [
                    {
                        contents: '테스트 댓글',
                        writer: '1234',
                        writerName: '김진석',
                        post: '12345',
                        responseTo: '4321',
                        date: '2021-03-30 03:21:06',
                    },
                ],
                isAuthenticated: true,
                loading: false,
            };
        case COMMENT_UPLOADING_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case COMMENT_EDIT_UPLOADING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case COMMENT_EDIT_UPLOADING_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case COMMENT_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case COMMENT_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case COMMENT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case COMMENT_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default commentReducer;
