import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../actions";
import SigninForm from "../components/SigninForm";
import { useHistory } from "react-router-dom";

function SigninFormContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useCallback(
    (email, password) => {
      dispatch(loginThunk(email, password, history));
    },
    [dispatch, history]
  );
  return <SigninForm login={login} />;
}

export default SigninFormContainer;
