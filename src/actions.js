import BookService from "./services/BookService";
import UserService from "./services/UserService";
import TokenService from "./services/TokenService";

// 액션의 타입을 정의하여 변수로 빼는 단계
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

// 액션 객체를 만들어 내는 함수 (액션 생성자)를 만드는 단계
export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function endLoading() {
  return {
    type: END_LOADING,
  };
}

// books
export const START_GET_BOOKS = "START_GET_BOOKS";
export const SUCCESS_GET_BOOKS = "SUCCESS_GET_BOOKS";
export const FAIL_GET_BOOKS = "FAIL_GET_BOOKS";

export function startGetBooks() {
  return {
    type: START_GET_BOOKS,
  };
}

export function successGetBooks(books) {
  return {
    type: SUCCESS_GET_BOOKS,
    books,
  };
}

export function failGetBooks(error) {
  return {
    type: FAIL_GET_BOOKS,
    error,
  };
}

export function getBookThunk(token) {
  return async (dispatch, getState) => {
    try {
      dispatch(startGetBooks());
      await sleep(3000);

      const state = getState();
      const token = state.auth.token;
      const books = await BookService.getBooks(token);
      dispatch(successGetBooks(books));
    } catch (error) {
      console.log(error);
      dispatch(failGetBooks(error));
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});
const loginFail = err => ({
  type: LOGIN_FAIL,
  err,
});

export const loginThunk = (email, password, history) => {
  return async dispatch => {
    try {
      dispatch(loginStart());
      await sleep();
      // 1. 토큰을 저장한다.
      const token = await UserService.login(email, password);
      TokenService.save(token);
      dispatch(loginSuccess(token));
      history.push("/");
    } catch (error) {
      dispatch(loginFail(error));
    }
  };
};
