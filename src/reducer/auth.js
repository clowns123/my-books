import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_START } from "../actions";

const initialState = {
  token: null,
  loading: false,
  error: null,
};
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
}
