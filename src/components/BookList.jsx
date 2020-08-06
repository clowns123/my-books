import React, { useState } from "react";
import { WhiteBox, SigninBlock } from "../styles/styled";
import { Button } from "antd";

// Presentational Component
export default function BookList({ books, loading, error, getBooks }) {
  React.useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div>
      <h1>BookList</h1>
      <p>
        <button onClick={reload}>Reload</button>
      </p>
      <SigninBlock>
        <WhiteBox>
          <div className="right"></div>
          <div className="left">
            {loading && <p>로딩 중...</p>}
            {error && <p>에러다!!</p>}
            {error === null &&
              books.map((book) => {
                return <p>{book.title}</p>;
              })}
          </div>
        </WhiteBox>
      </SigninBlock>
    </div>
  );

  function reload() {
    getBooks();
  }
}
