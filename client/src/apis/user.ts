import axios from 'axios';

interface paramTypes {
  email: string;
  password: string;
}

export const fetchUser = ({ email, password }: paramTypes) => {
  const data = { email, password };
  return axios.post('/auth/login', data).then((res) => {
    console.log(res);
    const { Authorization } = res.data;
    console.log(Authorization);
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${Authorization}`;
    return res.data;
  });
};
