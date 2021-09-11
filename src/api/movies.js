import axios from '../axios/axios';

export const moviesAPI = {
  async getMoviesByTitle(title) {
    const response = await axios.get(`search/movie?query=${title}&page=1`);
    return response.data;
  },
  async getMovieById(id) {
    const response = await axios.get(`
    /movie/${id}`);
    return response.data;
  },
};
