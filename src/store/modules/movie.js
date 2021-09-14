import { moviesAPI } from '../../api/movies';

export default {
  state: {
    movies: {},
    isLoading: false,
  },
  getters: {
    allMovies(state) {
      return state.movies;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  actions: {
    async searchMovie({ commit }, title) {
      commit('setIsLoading', true);
      moviesAPI
        .getMoviesByTitle(title)
        .then((data) => {
          console.log(data);
          commit('setMovies', data);
        })
        .finally(() => {
          commit('setIsLoading', false);
        });
    },
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
};
