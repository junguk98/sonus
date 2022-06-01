import axios from 'axios';

export const fetchMusics = () => {
  return axios.get(`/api/musics`).then((res) => res.data);
};
