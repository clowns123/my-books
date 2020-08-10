import { createAction, handleActions } from "redux-actions";
import { put, delay, call, select, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import BookService from "../../services/BookService";
// 액션 타입
const perfix = "my-books/booksChange";
const START = `${perfix}/START`;
const SUCCESS = `${perfix}/SUCESS`;
const FAIL = `${perfix}/FAIL`;

export const start = createAction(START);
export const success = createAction(SUCCESS);
export const fail = createAction(FAIL, (err) => err);

// 리듀서
const initialState = {
  loading: false,
  error: null,
};

const add = handleActions(
  {
    [START]: (state, action) => ({
      error: null,
      loading: true,
    }),
    [SUCCESS]: (state, action) => ({
      loading: false,
      error: null,
    }),
    [FAIL]: (state, action) => ({
      loading: false,
      error: action.error,
    }),
  },
  initialState
);

export default add;

// 미들웨어
const ADD_START = `${perfix}/ADD_START`;
const REMOVE_START = `${perfix}/REMOVE_START`;

export const removeStart = createAction(REMOVE_START);
export const addStart = createAction(ADD_START);

function* addStartSaga(action) {
  const book = action.payload;
  try {
    yield put(start());
    yield delay(1000);
    const token = yield select((start) => start.auth.token);
    yield call(BookService.addBooks, token, book);
    yield put(success(book));
    yield put(push("/"));
  } catch (err) {
    yield put(fail(err));
  }
}

function* removeStartSaga(action) {
  const id = action.payload;
  try {
    yield put(start());
    yield delay(1000);
    const token = yield select((start) => start.auth.token);
    yield call(BookService.removeBook, token, id);
    yield put(success());
  } catch (err) {
    yield put(fail(err));
  }
}

export function* addSaga() {
  yield takeLatest(ADD_START, addStartSaga);
  yield takeLatest(REMOVE_START, removeStartSaga);
}
