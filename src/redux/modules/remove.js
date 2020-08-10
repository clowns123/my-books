import { createAction, handleActions } from "redux-actions";
import { put, delay, call, select, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import BookService from "../../services/BookService";
// 액션 타입
const perfix = "my-books/remove";
const START = `${perfix}/START`;
const SUCCESS = `${perfix}/SUCESS`;
const FAIL = `${perfix}/FAIL`;

export const start = createAction(START);
export const success = createAction(SUCCESS, (id) => id);
export const fail = createAction(FAIL, (err) => err);

// 리듀서
const initialState = {
  loading: false,
  error: null,
  id: null,
};

const remove = handleActions(
  {
    [START]: (state, action) => ({ loading: true, error: null, id: null }),
    [SUCCESS]: (state, action) => ({
      loading: false,
      error: null,
      id: action.id,
    }),
    [FAIL]: (state, action) => ({
      error: action.error,
      loading: false,
      id: null,
    }),
  },
  initialState
);

export default remove;

// 미들웨어
const REMOVE_START = `${perfix}/REMOVE_START`;
export const removeStart = createAction(REMOVE_START);

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

export function* removeSaga() {
  yield takeEvery(REMOVE_START, removeStartSaga);
}
