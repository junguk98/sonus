import { ChangeEventHandler, useCallback, useState } from 'react';
import { fetchUser } from 'apis/user';
import { AxiosError } from 'axios';
import { User } from 'interfaces/user';
import { useQuery } from 'react-query';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { userState } from 'store';
import useInput from './useInput';

type ReturnType<T> = [
  string,
  T,
  AxiosError | null,
  string,
  string,
  ChangeEventHandler<HTMLInputElement>,
  ChangeEventHandler<HTMLInputElement>,
  SetterOrUpdater<T>,
  () => void
];

const useLogin = (): ReturnType<User | undefined> => {
  const [loginRequest, setLoginRequest] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const setUser = useSetRecoilState<User | undefined>(userState);
  const { status, data, error } = useQuery<User, AxiosError>(
    ['user', loginRequest],
    () => fetchUser({ email, password }),
    {
      enabled: !!loginRequest,
    }
  );
  const onLogin = useCallback(() => {
    setLoginRequest(true);
  }, []);

  return [
    status,
    data,
    error,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    setUser,
    onLogin,
  ];
};
export default useLogin;
