import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { startLoginSagaActionCreator } from "../redux/modules/auth";
import SigninForm from "../components/SigninForm";

function SigninFormContainer() {
    const dispatch = useDispatch();
    const login = useCallback(
        (email, password) => {
            dispatch(startLoginSagaActionCreator(email, password));
        },
        [dispatch]
    );
    return <SigninForm login={login} />;
}

export default SigninFormContainer;
