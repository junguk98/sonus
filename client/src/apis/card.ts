import axios from 'axios';

export const fetchCards = () => {
  return axios.get(`/api/cards`).then((res) => res.data);
};
