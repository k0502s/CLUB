import axios from 'axios';
import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  CHAT_FAILURE,
  CHAT_SUCCESS,
  CHAT_REQUEST,
} from "../types";


// chat

function* chat(action) {
  try {
    const result = action.payload
    console.log(result);
    yield put({
      type: CHAT_SUCCESS,
      payload: result
    });
  } catch (e) {
    yield put({
      type: CHAT_FAILURE,
      payload: e.response,
    });
  }
}

function* watchChat() {
  yield takeEvery(CHAT_REQUEST, chat);
}


export default function* chatSaga() {
  yield all([
    fork(watchChat)
  ]);
}
