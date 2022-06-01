import { useCallback, useState } from 'react';
import { fetchUser } from 'apis/user';
import { AxiosError } from 'axios';
import { User } from 'interfaces/user';
import { useQuery } from 'react-query';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { userState } from 'store';

type ReturnType<T> = [
  string,
  T,
  AxiosError | null,
  SetterOrUpdater<T>,
  () => void
];

const useLogin = (): ReturnType<User | undefined> => {
  const [loginRequest, setLoginRequest] = useState(false);
  const setUser = useSetRecoilState<User | undefined>(userState);
  const { status, data, error } = useQuery<User, AxiosError>(
    ['user', loginRequest],
    fetchUser,
    {
      enabled: !!loginRequest,
    }
  );
  const onLogin = useCallback(() => {
    setLoginRequest(true);
  }, []);

  return [status, data, error, setUser, onLogin];
};
export default useLogin;
