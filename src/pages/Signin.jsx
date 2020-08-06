import React from "react";
import withoutAuth from "../hocs/withoutAuth";
import SigninFormContainer from "../containers/SigninFormContainer";
import { useSelector } from "react-redux";
import { Ridirect } from "react-router-dom";

function Signin() {
  const token = useSelector((state) => state.auth.token);
  if (token !== null) {
    return <Ridirect />;
  }
  return (
    <div>
      <h1>로그인</h1>
      <SigninFormContainer />
    </div>
  );
}

export default withoutAuth(Signin);
