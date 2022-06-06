import axios from 'axios';

export const fetchCards = ({ pageParam = 0 }) => {
  console.log('pageParam: ', pageParam);
  return axios
    .get(`/api/musics`, { params: { limit: 30, offset: pageParam } })
    .then((res) => res.data);
};
