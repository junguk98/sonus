import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from 'hooks/useLogin';

const LoginPage = () => {
  const history = useNavigate();
  const [status, data, error, setUser, onLogin] = useLogin();

  useEffect(() => {
    if (data) {
      setUser(data);
      history('/');
    }
  }, [data]);

  if (status === 'error') {
    if (error) return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {status === 'loading' && <div>loading...</div>}
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    </>
  );
};
export default LoginPage;
