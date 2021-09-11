import axios from '../axios/axios';

export const searchMoviesAPI = {
  async getMovieByTitle(title) {
    const response = await axios.get(`search/movie?query=${title}&page=1`);
    return response.data;
  },
};
