import { CHAT_REQUEST, CHAT_SUCCESS, CHAT_FAILURE, CHAT_RESET_REQUEST, CHAT_RESET_SUCCESS, CHAT_RESET_FAILURE } from '../../types';

const initialState = {
    messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_REQUEST:
            return {
                ...state,
            };
        case CHAT_SUCCESS:
            return {
                ...state,
                messages: ['안녕하세요'],
            };
        case CHAT_FAILURE:
            return {
                ...state,
                messages: [],
            };
        case CHAT_RESET_REQUEST:
            return {
                ...state,
            };
        case CHAT_RESET_SUCCESS:
            return {
                ...state,
                messages: [],
            };
        case CHAT_RESET_FAILURE:
            return {
                ...state,
                messages: 'Reset error',
            };

        default:
            return state;
    }
};

export default chatReducer;
