import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AddComponent = ({ addBook, loading, error }) => {
    const token = useSelector((state) => state.auth.token);

    const titleRef = useRef();
    const commentRef = useRef();
    const authorRef = useRef();
    const urlRef = useRef();

    const add = useCallback(() => {
        const title = titleRef.current.value;
        const author = authorRef.current.value;
        const comment = commentRef.current.value;
        const url = urlRef.current.value;

        const book = {
            title,
            author,
            comment,
            url,
        };
        addBook(book);
    }, [addBook]);

    if (token === null) {
        return <Redirect to="/signin" />;
    }
    return (
        <div>
            <h1>책 추가하기</h1>
            <div>
                <p>Title</p>
                <input type="text" ref={titleRef}></input>
            </div>
            <div>
                <p>Comment</p>
                <input type="text" ref={commentRef}></input>
            </div>
            <div>
                <p>Author</p>
                <input type="text" ref={authorRef}></input>
            </div>
            <div>
                <p>URL</p>
                <input type="text" ref={urlRef}></input>
            </div>
            <button type="button" onClick={add}>
                추가하기
            </button>
        </div>
    );
};

export default AddComponent;
