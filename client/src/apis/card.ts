import axios from 'axios';

export const fetchCards = ({ pageParam = 0 }) => {
  return axios
    .get(`/api/musics`, { params: { limit: 30, offset: pageParam } })
    .then((res) => res.data);
};
