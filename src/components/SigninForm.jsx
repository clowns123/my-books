import React, { useRef } from "react";
import { Input, SigninBlock, WhiteBox, Title } from "../styles/styled";
import { Button } from "antd";

const SigninForm = ({ login }) => {
  const emaulRef = useRef();
  const passRef = useRef();

  function click() {
    const email = emaulRef.current.value;
    const pass = passRef.current.value;
    login(email, pass);
  }

  return (
    <SigninBlock>
      <WhiteBox>
        <Title> 로그인 </Title>
        <p>
          <Input type="text" ref={emaulRef} />
        </p>
        <p>
          <Input type="password" ref={passRef} />
        </p>
        <p>
          <Button
            onClick={click}
            style={{ backgroundColor: "#333", color: "white" }}
          >
            로그인
          </Button>
        </p>
      </WhiteBox>
    </SigninBlock>
  );
};

export default SigninForm;
