import React, { useRef } from "react";

const SigninForm = ({ login }) => {
  const emaulRef = useRef();
  const passRef = useRef();

  function click() {
    const email = emaulRef.current.value;
    const pass = passRef.current.value;

    if (email === "" || pass === "") return;
    login(email, pass);
  }

  return (
    <div>
      <p>
        <input type="text" ref={emaulRef} />
      </p>
      <p>
        <input type="password" ref={passRef} />
      </p>
      <p>
        <button onClick={click}>로그인</button>
      </p>
    </div>
  );
};

export default SigninForm;
