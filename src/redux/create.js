import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TokenService from "../services/TokenService";
import reducer from "./modules/reducer";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/middlewares/saga";

export const history = createBrowserHistory();
export default function create() {
  const token = TokenService.get();
  const sagaMiddle = createSagaMiddleware();

  const store = createStore(
    reducer(history),
    {
      auth: {
        token: token,
        loading: false,
        err: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(history, routerMiddleware(history)),
        sagaMiddle
      )
    )
  );
  sagaMiddle.run(rootSaga);
  return store;
}
