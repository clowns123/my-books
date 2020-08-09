import { combineReducers } from "redux";
import books from "./books";
import auth from "./auth";
import add from "./add";
import remove from "./remove";
import { connectRouter } from "connected-react-router";

const reducer = (history) =>
    combineReducers({
        books,
        auth,
        add,
        remove,
        router: connectRouter(history),
    });

export default reducer;
