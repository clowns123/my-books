import React from "react";
import withoutAuth from "../hocs/withoutAuth";
import SigninFormContainer from "../containers/SigninFormContainer";

function Signin() {
  return (
    <div>
      <h1>로그인</h1>
      <SigninFormContainer />
    </div>
  );
}

export default withoutAuth(Signin);
