import React from "react";
import withAuth from "../hocs/withAuth";
import BookListContainer from "../containers/BookListContainer";

function Home() {
  return <BookListContainer />;
}

export default withAuth(Home);
