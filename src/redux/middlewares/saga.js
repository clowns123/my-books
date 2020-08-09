import { all } from "redux-saga/effects";
import { authSaga } from "../modules/auth";
import { booksSaga } from "../modules/books";
import { addSaga } from "../modules/add";
import { removeSaga } from "../modules/remove";

export default function* rootSaga() {
    // 어떤 액션에 반응하는 어떤 비동기 로직들의 모임
    yield all([authSaga(), booksSaga(), addSaga(), removeSaga()]);
}
