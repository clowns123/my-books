import styled from "styled-components";
import signinBG from "./images/signinBG.jpg";
import palette from "./palette";

export const SigninBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url(${signinBG});
  background-repeat: no-repeat;
  background-size: cover;

  // 내부 중앙정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  .right {
    float: left;
    width: 50%;
  }
  .left {
    float: right;
    width: 50%;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const Title = styled.h1``;
