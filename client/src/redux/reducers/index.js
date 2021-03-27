import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import chatReducer from './chatReducer';
import photoReducer from './photoReducer';
import likeReducer from './likeReducer';
import postReducer from "./postReducer";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        message: chatReducer,
        photo: photoReducer,
        like: likeReducer,
        post: postReducer,
    });

export default createRootReducer;
