import axios from 'axios';

export const fetchUser = () => {
  return axios.get(`/api/user/1`).then((res) => res.data);
};
