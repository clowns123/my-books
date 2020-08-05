import React from 'react';
import BookList from '../components/BookList';

export default function BookListContainer({ token }) {
  return <BookList token={token} />;
}
