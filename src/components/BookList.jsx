import React from "react";
import { WhiteBox, SigninBlock } from "../styles/styled";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

// Presentational Component
export default function BookList({
    books,
    loading,
    error,
    getBooks,
    logout,
    remove,
}) {
    React.useEffect(() => {
        getBooks();
    }, [getBooks]);

    const token = useSelector((state) => state.auth.token);
    if (token === null) {
        return <Redirect to="/signin" />;
    }

    const del = (id) => {
        console.log(id);
        remove(id);
        getBooks();
    };

    return (
        <div>
            <h1>BookList</h1>
            <SigninBlock>
                <WhiteBox>
                    <div className="right">
                        <p>
                            <button onClick={reload}>Reload</button>
                        </p>
                    </div>
                    <div className="left">
                        {loading && <p>로딩 중...</p>}
                        {error && <p>에러다!!</p>}
                        {error === null &&
                            books.map((book, i) => {
                                return (
                                    <p key={i}>
                                        {book.title}{" "}
                                        <button
                                            onClick={() => del(book.bookId)}
                                        >
                                            삭제
                                        </button>
                                    </p>
                                );
                            })}
                        <Link to={"/add"}>추가</Link>
                    </div>
                </WhiteBox>
                <button onClick={exit}>로그아웃</button>
            </SigninBlock>
        </div>
    );

    function reload() {
        getBooks();
    }
    function exit() {
        logout();
    }
}
