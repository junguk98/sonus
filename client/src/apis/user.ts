import axios from 'axios';

interface paramTypes {
  email: string;
  password: string;
}

export const fetchUser = ({ email, password }: paramTypes) => {
  const data = { email, password };
  return axios.post(`/api/user/1`, data).then((res) => {
    const { accessToken } = res.data;

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return res.data;
  });
};
