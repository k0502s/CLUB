import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        message: chatReducer,
    });

export default createRootReducer;
