<template>
  <div>
    <h1>moviespage</h1>
    <Finder @search-movie="searchMovie" />
    <Preloader v-if="isLoading" />
    <MoviesList v-else />
  </div>
</template>

<script>
import Preloader from '../../components/UI/Preloader/Preloader';
import Finder from './Finder/Finder';
import MoviesList from './MoviesList/MoviesList';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Finder,
    MoviesList,
    Preloader,
  },
  computed: mapGetters(['isLoading']),
  methods: mapActions(['searchMovie']),
};
</script>
