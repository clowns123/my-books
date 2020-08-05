import React from 'react';
import BookList from '../components/BookList';
import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  startGetBooks,
  successGetBooks,
  failGetBooks,
  startLoading,
} from '../actions';

export default function BookListContainer({ token }) {
  // mapStateToProps
  const books = useSelector((state) => state.books);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  // mapDispatchToProps
  const dispatch = useDispatch();
  const getBooks = React.useCallback(async () => {
    // getBooksSaga();
    try {
      dispatch(startGetBooks());
      await sleep(3000);
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      const books = response.data;
      dispatch(successGetBooks(books));
    } catch (error) {
      console.log(error);
      dispatch(failGetBooks(error));
    }
  }, [dispatch, token]);
  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}

// 1. Redux 의 RootState {books: [], loading: false, error: null}; => props
// 2. "Redux 를 dispatch 하기 위한 함수"를 만들어 => props

// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//     loading: state.loading,
//     error: state.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBooks: async (token) => {
//       try {
//         dispatch(startGetBooks());
//         await sleep(3000);
//         const response = await axios.get('https://api.marktube.tv/v1/book', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(response.data);
//         const books = response.data;
//         dispatch(successGetBooks(books));
//       } catch (error) {
//         console.log(error);
//         dispatch(failGetBooks(error));
//       }
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BookList);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
