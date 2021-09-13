<template>
  <div class="wrap">
    <Preloader v-if="isLoading" />
    <section v-else>
      <div>
        <div class="img-wrapper">
          <img v-if="movie.poster_path" :src="posterSrc" :alt="movie.title" />
        </div>
      </div>
      <div>
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { moviesAPI } from '../../api/movies';
import Preloader from '../../components/UI/Preloader/Preloader';

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      movie: {},
      isLoading: false,
    };
  },
  computed: {
    posterSrc() {
      return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.movie.poster_path}`;
    },
  },

  mounted() {
    this.isLoading = true;
    moviesAPI
      .getMovieById(this.$route.params.id)
      .then((data) => {
        this.movie = data;
        console.log(data);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.img-wrapper {
  width: 300px;
  height: 450px;
  background-image: url('../../assets/img/without-image.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ddd;
  border-radius: 0.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.wrap {
  padding-top: 2rem;
}

section {
  display: flex;

  & h1 {
    margin: 0 0 1.5rem;
  }

  & > div {
    &:first-child {
      flex-shrink: 0;
      margin-right: 2rem;
    }

    &:last-child {
      flex-grow: 1;
    }
  }
}
</style>
