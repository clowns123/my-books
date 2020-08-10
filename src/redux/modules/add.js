import { createAction, handleActions } from "redux-actions";
import { put, delay, call, select, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import BookService from "../../services/BookService";
// 액션 타입
const perfix = "my-books/add";
const START = `${perfix}/START`;
const SUCCESS = `${perfix}/SUCESS`;
const FAIL = `${perfix}/FAIL`;

export const start = createAction(START);
export const success = createAction(SUCCESS, (book) => book);
export const fail = createAction(FAIL, (err) => err);

// 리듀서
const initialState = {
  loading: false,
  error: null,
  book: {
    title: "",
    author: "",
    comment: "",
    url: "",
  },
};

const add = handleActions(
  {
    [START]: (state, action) => ({ ...state, loading: true }),
    [SUCCESS]: (state, action) => ({
      loading: false,
      error: null,
      book: {
        ...action.book,
      },
    }),
    [FAIL]: (state, action) => ({
      ...state,
      error: action.error,
    }),
  },
  initialState
);

export default add;

// 미들웨어
const ADD_START = `${perfix}/ADD_START`;
export const addStart = createAction(ADD_START);

function* addStartSaga(action) {
  const book = action.payload;
  try {
    yield put(start());
    yield delay(1000);
    const token = yield select((start) => start.auth.token);
    yield call(BookService.addBooks, token, book);
    yield put(success(book));
    yield console.log("test1");
    yield put(push("/"));
    yield console.log("test2");
  } catch (err) {
    yield put(fail(err));
  }
}

export function* addSaga() {
  yield takeLatest(ADD_START, addStartSaga);
}
