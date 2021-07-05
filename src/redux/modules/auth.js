import UserService from "../../services/UserService";
import TokenService from "../../services/TokenService";
import { takeEvery, put, delay, call } from "redux-saga/effects";
import { push } from "connected-react-router";

// 액션 타입
const perfix = "my-books/auth";
const START = `${perfix}/START`;
const SUCCESS = `${perfix}/SUCESS`;
const FAIL = `${perfix}/FAIL`;

const LOGOUT = `${perfix}/LOGOUT`;
const LOGOUT_SUCCESS = `${perfix}/LOGOUT_SUCCESS`;
const LOGOUT_FAIL = `${perfix}/LOGOUT_FAIL`;

// 액션 생성자
const loginStart = () => ({
  type: START,
});

const loginSuccess = (token) => ({
  type: SUCCESS,
  token,
});
const loginFail = (err) => ({
  type: FAIL,
  err,
});

const logout = () => ({
  type: LOGOUT,
});

const logout_success = () => ({
  type: LOGOUT_SUCCESS,
});

const logout_fail = (err) => ({
  type: LOGOUT_SUCCESS,
  err,
});

// state 초기화
const initialState = {
  token: null,
  loading: false,
  error: null,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case FAIL:
      return {
        ...state,
        error: action.err,
      };

    case LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: true,
        token: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
}

// 액션 타입
export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      await sleep();
      // 1. 토큰을 저장한다.
      const token = await UserService.login(email, password);
      TokenService.save(token);
      dispatch(loginSuccess(token));
      dispatch(push("/"));
    } catch (error) {
      dispatch(loginFail(error));
    }
  };
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// saga
// 어떤 액션 => 어떤 사가 실행 : 룰 지정
const START_LOGIN_SAGA = "START_LOGIN_SAGA";
const START_LOGOUT_SAGA = "START_LOGOUT_SAGA";

export const startLoginSagaActionCreator = (email, password) => ({
  type: START_LOGIN_SAGA,
  payload: {
    email,
    password,
  },
});

export const startLogoutSagaActionCreator = () => ({
  type: START_LOGOUT_SAGA,
});

export function* startLoginSaga(action) {
  // 비동기 로직
  // dispatch => put
  const { email, password } = action.payload;
  try {
    yield put(loginStart());
    yield delay(2000);
    const token = yield call(UserService.login, email, password);
    TokenService.save(token);
    yield put(loginSuccess(token));
    yield put(push("/"));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* startLogoutSaga() {
  try {
    yield put(logout());
    yield delay(2000);
    yield TokenService.remove();
    yield put(logout_success());
    yield put(push("/signin"));
  } catch (err) {
    console.log(err);
    yield put(logout_fail(err));
  }
}

export function* authSaga() {
  yield takeEvery(START_LOGIN_SAGA, startLoginSaga);
  yield takeEvery(START_LOGOUT_SAGA, startLogoutSaga);
}
