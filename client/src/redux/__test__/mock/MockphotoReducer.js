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
} from '../../types';

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
                success: true,
                isLoading: false,
            };
        case PHOTO_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: false,
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
                totalItems: 1,
                photodata: [
                    {
                        images: ['image1'],
                        genres: 1,
                        views: 21,
                        date: '2021-03-30 04:44',
                        comments: [],
                        _id: '1234',
                        writer: '12345',
                        title: '도시의 야경',
                        description: '하늘 공원에서 보는 야경',
                        createdAt: '2021-03-30T07:53:13.252Z',
                        updatedAt: '2021-04-08T05:40:40.168Z',
                    },
                ],
                totalPages: 1,
                currentPage: 1,
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
                bestimages: [
                    {
                        images: ['bestimage1'],
                        genres: 1,
                        views: 12,
                        date: '2021-03-29 06:14',
                        comments: [],
                        _id: '60619acf85c84e156c9fb2e6',
                        writer: '60618eb5d690a00af08bd72a',
                        title: '월드컵 경기장',
                        description: '상암 동의 월드컵 경기장이다.',
                        createdAt: '2021-03-29T09:15:59.950Z',
                        updatedAt: '2021-03-30T10:07:37.281Z',
                    },
                ],
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
                totalItems: 1,
                bestphotodata: [
                    {
                        images: ['bestimage1'],
                        genres: 1,
                        views: 12,
                        date: '2021-03-29 06:14',
                        comments: [],
                        _id: '60619acf85c84e156c9fb2e6',
                        writer: '60618eb5d690a00af08bd72a',
                        title: '월드컵 경기장',
                        description: '상암 동의 월드컵 경기장이다.',
                        createdAt: '2021-03-29T09:15:59.950Z',
                        updatedAt: '2021-03-30T10:07:37.281Z',
                    },
                ],
                totalPages: 1,
                currentPage: 1,
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
                detailphoto: {
                    totalItems: 1,
                    photodata: [
                        {
                            images: ['detailimage1'],
                            genres: 1,
                            views: 21,
                            date: '2021-03-30 04:44',
                            comments: [],
                            _id: '1234',
                            writer: '12345',
                            title: '도시의 야경',
                            description: '하늘 공원에서 보는 야경',
                            createdAt: '2021-03-30T07:53:13.252Z',
                            updatedAt: '2021-04-08T05:40:40.168Z',
                        },
                    ],
                    totalPages: 1,
                    currentPage: 1,
                },
                writerName: '12345',
                writerId: '1234',
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
                detailphoto: [
                    {
                        images: ['detailimage1'],
                        genres: 1,
                        views: 21,
                        date: '2021-03-30 04:44',
                        comments: [],
                        _id: '1234',
                        writer: '12345',
                        title: '도시의 야경',
                        description: '하늘 공원에서 보는 야경',
                        createdAt: '2021-03-30T07:53:13.252Z',
                        updatedAt: '2021-04-08T05:40:40.168Z',
                    },
                ],
                detailimages: [['detailimage1']],
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
