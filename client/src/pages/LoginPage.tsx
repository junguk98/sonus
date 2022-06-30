import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from 'hooks/useLogin';
import Logo from 'components/header/Logo';
import 'styles/login.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const history = useNavigate();
  const [
    status,
    data,
    error,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    setUser,
    onLogin,
  ] = useLogin();

  useEffect(() => {
    if (data) {
      setUser(data.user);
      history('/');
    }
  }, [data]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('login call');
  };

  if (status === 'error') {
    if (error) return <span>Error: {error.message}</span>;
  }

  return (
    <div className="login-wrapper">
      {status === 'loading' && <div>loading...</div>}
      <div className="sign-in-to">Sign in to</div>
      <Logo />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user-email">Email address</label>
          <input name="user-email" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <button type="submit" onClick={onLogin}>
          Sign in
        </button>
      </form>
      <Link to="/register">
        <button>회원 가입</button>
      </Link>
    </div>
  );
};
export default LoginPage;
