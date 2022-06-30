import { registerUser } from 'apis/user';
import axios from 'axios';
import useInput from 'hooks/useInput';
import React from 'react';

const RegisterPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onRegister = () => {
    registerUser({ email, password });
    console.log('register click');
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const testCall = () => {
    axios.get('/api/auth/testcall').then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        이메일:
        <input
          name="email"
          type="text"
          value={email}
          onChange={onChangeEmail}
        />
        비밀번호:
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit" onClick={onRegister}>
          회원 가입
        </button>
      </form>
      <button onClick={testCall}>test api call</button>
    </>
  );
};
export default RegisterPage;
