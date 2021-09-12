<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <img :src="posterSrc" :alt="movie.title" />
  </div>
</template>

<script>
import { moviesAPI } from '../../api/movies';

export default {
  data() {
    return {
      movie: {},
    };
  },
  computed: {
    posterSrc() {
      return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.movie.poster_path}`;
    },
  },
  mounted() {
    moviesAPI.getMovieById(this.$route.params.id).then((data) => (this.movie = data));
  },
};
</script>
