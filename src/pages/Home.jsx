import React from "react";
import BookListContainer from "../containers/BookListContainer";
import useAuth from "../hooks/useAuh";

function Home() {
  useAuth();
  return <BookListContainer />;
}

export default Home;
