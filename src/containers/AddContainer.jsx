import React, { useCallback } from "react";
import AddComponent from "../components/AddComponent";
import { useDispatch, useSelector } from "react-redux";
import { addStart } from "../redux/modules/add";

const AddContainer = () => {
    const loading = useSelector((state) => state.books.loading);
    const error = useSelector((state) => state.books.error);

    // mapDispatchToProps
    const dispatch = useDispatch();
    const addBook = useCallback(
        (email, password) => {
            dispatch(addStart(email, password));
        },
        [dispatch]
    );

    return (
        <div>
            <AddComponent addBook={addBook} loading={loading} error={error} />
        </div>
    );
};

export default AddContainer;
