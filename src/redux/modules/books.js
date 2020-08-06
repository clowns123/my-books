import BookService from "../../services/BookService";
import { takeLatest, put, delay, call, select } from "redux-saga/effects";

// 액션 타입
const prefix = "my-books/books";
const START = `${prefix}/START_GET_BOOKS`;
const SUCCESS = `${prefix}/SUCCESS_GET_BOOKS`;
const FAIL = `${prefix}/FAIL_GET_BOOKS`;

// 액션 생성자
function startGetBooks() {
  return {
    type: START,
  };
}

function successGetBooks(books) {
  return {
    type: SUCCESS,
    books,
  };
}

function failGetBooks(error) {
  return {
    type: FAIL,
    error,
  };
}

// state 초기화
const initialState = {
  loading: false,
  books: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case START:
      return {
        loading: true,
        books: [],
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        books: action.books,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        books: [],
        error: action.error,
      };
    default:
      return state;
  }
}

// saga
const START_GET_BOOKS = "START_GET_BOOKS";
export const startGetBooksActionCreate = () => ({
  type: START_GET_BOOKS,
});
function* startGetBooksSaga() {
  try {
    yield put(startGetBooks());
    yield delay(2000);

    const token = yield select((start) => start.auth.token);
    const books = yield call(BookService.getBooks(token));
    yield successGetBooks(books);
  } catch (error) {
    yield put(failGetBooks(error));
  }
}
export function* booksSaga() {
  yield takeLatest(START_GET_BOOKS, startGetBooksSaga);
}
