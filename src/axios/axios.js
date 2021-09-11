import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '3e077d336d11446c7c9c0326e13192a2',
    language: 'ru',
  },
});

export default instance;
