import { combineReducers } from "redux";
import books from "./books";
import booksChange from "./booksChange";
import auth from "./auth";
import { connectRouter } from "connected-react-router";

const reducer = (history) =>
  combineReducers({
    books,
    auth,
    booksChange,
    router: connectRouter(history),
  });

export default reducer;
