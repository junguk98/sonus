import axios, { AxiosResponse } from 'axios';

interface paramTypes {
  email: string;
  password: string;
}

export const fetchUser = ({ email, password }: paramTypes) => {
  const data = { email, password };
  return axios
    .post('/api/auth/login', data)
    .then((res) => {
      onLoginSuccess(res);
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const silentRefresh = () => {
  axios.post('/api/auth/silent-refresh').then((res) => {
    onLoginSuccess(res);
  });
};

export const onLoginSuccess = (res: AxiosResponse) => {
  const { Authorization } = res.data;
  axios.defaults.headers.common['Authorization'] = `Bearer ${Authorization}`;
};

export const registerUser = ({ email, password }: paramTypes) => {
  const data = { email, password };
  axios
    .post('/api/auth/register', data)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const logout = () => {
  axios
    .post('/api/auth/logout')
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => console.log(e));
};
