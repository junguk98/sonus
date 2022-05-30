import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../store';

const LoginPage = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const history = useNavigate();

  const onLogin = useCallback(() => {
    setIsLoggedIn(true);
    history('/');
  }, []);

  return (
    <>
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    </>
  );
};
export default LoginPage;
