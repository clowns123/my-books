import React from "react";
import BookList from "../components/BookList";
import { useDispatch, useSelector } from "react-redux";
import { startGetBooksActionCreate } from "../redux/modules/books";

export default function BookListContainer() {
  // mapStateToProps
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  // mapDispatchToProps
  const dispatch = useDispatch();
  const getBooks = React.useCallback(async () => {
    dispatch(startGetBooksActionCreate());
  }, [dispatch]);
  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}
