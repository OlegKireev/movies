<template>
  <div>
    <h1>moviespage</h1>
    <Finder @search-movie="searchMovie" />
    <MoviesList :movies="movies" />
  </div>
</template>

<script>
import { searchMoviesAPI } from '../../api/searchMovies';
import Finder from './Finder/Finder';
import MoviesList from './MoviesList/MoviesList';

export default {
  components: {
    Finder,
    MoviesList,
  },
  data() {
    return {
      movies: {},
    };
  },
  methods: {
    searchMovie(title) {
      searchMoviesAPI.getMovieByTitle(title).then((data) => {
        this.movies = data;
      });
    },
  },
};
</script>
