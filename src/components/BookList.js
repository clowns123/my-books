import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// 프레젠테이션 컴포넌트
export default function BookList({ books, loading, error }) {
  return (
    <div>
      <h1>BookList</h1>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러다!!</p>}
      {error === null && books.map((book) => <p>{book.title}</p>)}[]
      {books.map((book) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
}
