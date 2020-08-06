import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TokenService from "./services/TokenService";
import reducer from "./reducer";

export default function create() {
  const token = TokenService.get();
  return createStore(
    reducer,
    {
      auth: {
        token: token,
        loading: false,
        err: null,
      },
    },
    composeWithDevTools(applyMiddleware(thunk))
  );
}
