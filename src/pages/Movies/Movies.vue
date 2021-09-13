<template>
  <div>
    <h1>moviespage</h1>
    <Finder @search-movie="searchMovie" />
    <Preloader v-if="isLoading" />
    <MoviesList v-else :movies="movies" />
  </div>
</template>

<script>
import { moviesAPI } from '../../api/movies';
import Preloader from '../../components/UI/Preloader/Preloader';
import Finder from './Finder/Finder';
import MoviesList from './MoviesList/MoviesList';

export default {
  components: {
    Finder,
    MoviesList,
    Preloader,
  },
  data() {
    return {
      movies: {},
      isLoading: false,
    };
  },
  methods: {
    searchMovie(title) {
      this.isLoading = true;
      moviesAPI
        .getMoviesByTitle(title)
        .then((data) => {
          this.movies = data;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
