import React from "react";
import BookList from "../components/BookList";
import { useDispatch, useSelector } from "react-redux";
import { startGetBooksActionCreate } from "../redux/modules/books";
import { startLogoutSagaActionCreator } from "../redux/modules/auth";
import { removeStart } from "../redux/modules/remove";

export default function BookListContainer() {
    // mapStateToProps
    const books = useSelector((state) => state.books.books);
    const loading = useSelector((state) => state.books.loading);
    const error = useSelector((state) => state.books.error);

    // mapDispatchToProps
    const dispatch = useDispatch();
    const getBooks = React.useCallback(async () => {
        dispatch(startGetBooksActionCreate());
    }, [dispatch]);

    const logout = React.useCallback(() => {
        dispatch(startLogoutSagaActionCreator());
    }, [dispatch]);

    const remove = React.useCallback(
        (id) => {
            dispatch(removeStart(id));
        },
        [dispatch]
    );

    return (
        <BookList
            books={books}
            loading={loading}
            error={error}
            getBooks={getBooks}
            logout={logout}
            remove={remove}
        />
    );
}
