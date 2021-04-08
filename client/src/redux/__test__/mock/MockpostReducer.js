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
} from '../../types';

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
                totalItems: 1,
                postdata: [
                    {views:6,
                    fileUrl:"https://source.unsplash.com/random/301x201",
                    category:1,
                    date:"2021-03-30 03:43",
                    comments:[],
                    _id:"123",
                    title:"안녕하세요",
                    contents:"<p>ㅇㅇ</p>",
                    writer:"1234",
                    writerName:"김진석",
                    numberId:3,
                    }],
                totalPages: 1,
                currentPage: 1,
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
                error: false,
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
                postDetail: {
                    views: 7,
                    fileUrl: 'https://source.unsplash.com/random/301x201',
                    category: 1,
                    date: '2021-03-30 03:43',
                    comments: [],
                    _id: '123',
                    title: '안녕하세요',
                    contents: '<p>test</p>',
                },
                writerId: '1234',
                title: '안녕하세요',
                loading: false,
            };
        case POST_DETAIL_LOADING_FAILURE:
            return {
                ...state,
                error: false,
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
                postDetail: {
                    views: 7,
                    fileUrl: 'https://source.unsplash.com/random/301x201',
                    category: 1,
                    date: '2021-03-30 03:43',
                    comments: [],
                    _id: '123',
                    title: '안녕하세요',
                    contents: '<p>test</p>',
                },
                loading: false,
                writerId: '',
                title: '',
            };
        case POST_EDIT_LOADING_FAILURE:
            return {
                ...state,
                error: false,
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
                posts: true,
                isAuthenticated: true,
                loading: false,
            };
        case POST_EDIT_UPLOADING_FAILURE:
            return {
                ...state,
                error: false,
                loading: false,
            };
        default:
            return state;
    }
};

export default postReducer;
