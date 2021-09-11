<template>
  <div>
    <h3>Search results:</h3>
    <ul>
      <MovieItem v-for="movie of movies.results" :key="movie.id" :movie="movie" />
    </ul>
  </div>
</template>

<script>
import MovieItem from './MovieItem/MovieItem';
export default {
  props: {
    movies: Object,
  },
  components: {
    MovieItem,
  },
};
</script>
