import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import withoutAuth from '../hocs/withoutAuth';
import * as EmailValidator from 'email-validator';

class Signin extends React.Component {
  state = {
    email: '',
    isEmailValid: false,
  };
  passwordRef = React.createRef(); // 한번 만들어지면 객체 인스턴스는 그대로
  render() {
    return (
<<<<<<< HEAD:src/pages/Signin.jsx
      <div>
        <h1>로그인</h1>
        <p>
          <input type="text" value={this.state.email} onChange={this.change} />
        </p>
        <p>
          <input type="password" ref={this.passwordRef} />
        </p>
        <p>
          <button onClick={this.click}>로그인</button>
        </p>
=======
      <div className="signin">
        <div className="background">
          <div className="logo">
            <h1 className="title">My Books</h1>
            <p className="subTitle">Oh for a book and a shady nook...</p>
          </div>

          <div className="login">
            <input
              type="text"
              style={
                this.state.isEmailValid
                  ? { backgroundColor: '#6eaa5e' }
                  : { backgroundColor: '#ff7f6b' }
              }
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.change}
              placeholder="ID를 입력하세요"
            />
            <input
              type="password"
              ref={this.passwordRef}
              placeholder="패스워드를 입력하세요"
            />
            <button onClick={this.click} className=" loginBtn">
              로그인
            </button>
          </div>
        </div>
>>>>>>> c9b7713146fc37de51c23fb4bc4791f9b78bed41:src/pages/Signin.js
      </div>
    );
  }

  click = async () => {
    console.log('login', this.state.email, this.passwordRef.current.value);

    // 이메일과 패스워드를 뽑아서 서버에 보낸다. POST

    // web api

    // 무언가를 생성할 때, POST
    // 무언가를 조회할 때, GET
    // 무언가를 수정할 때, PATCH
    // 무언가를 삭제할 때, DELETE
    // ex) book, auth, user

    // 서버에다가 내가 허가된 유저인지를 체크하고, 인증 토큰을 받아오는 행위

    // 유저 테이블
    // 유저아이디, 유저이메일, 유저패스워드, 유저생성일...

    // 세션 테이블
    // 세션아이디, 세션토큰, 세션생성일...

    // 인증 토큰 브라우저 어딘가에 저장해두고,

    // 다른 정보를 얻어올때, 나 인증한 유저야 라고 토큰을 함께 보냅니다.

    // https://api.marktube.tv/v1/me POST {email, password}
    // {token: ''}

    const email = this.state.email;
    const password = this.passwordRef.current.value;

    if (email === '' || password === '') return;

    try {
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      // 1. 토큰을 저장한다.
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      // 2. 홈으로 이동시킨다.
      this.props.history.push('/');
    } catch (error) {
      const errorCode = error?.response?.data?.error || 'NOT_MATCH';
      if (errorCode === 'PASSWORD_NOT_MATCH') {
        message.error('패스워드가 안맞드라');
      } else if (errorCode === 'USER_NOT_EXIST') {
        message.error('없는 이메일이야');
      } else {
        message.error('나도 모르는 에러');
      }
    }
  };

  change = (e) => {
    //이메일 유효성 검사 함수
    const test = EmailValidator.validate(e.target.value);
    this.setState({ email: e.target.value, isEmailValid: test });
  };
}

export default withoutAuth(Signin);
