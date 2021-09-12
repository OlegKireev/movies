<template>
  <li>
    <img :src="posterSrc" :alt="movie.title" />
    <h3>{{ movie.title }}</h3>
    <span class="original-title">{{ movie.original_title }}</span>
    <footer>
      <span class="release-date">{{ relaseDate }}</span>
      <span class="rating" :style="{ backgroundColor: ratingColor }">{{ rating }}</span>
    </footer>
  </li>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
  computed: {
    posterSrc() {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.$props.movie.poster_path}`;
    },
    relaseDate() {
      return new Date(this.$props.movie.release_date).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    },
    rating() {
      return Number(this.$props.movie.vote_average).toFixed(1);
    },
    ratingColor() {
      const rating = Number(this.$props.movie.vote_average);

      let result = '#ffffff';
      if (rating > 9) {
        result = 'green';
      } else if (rating >= 7 && rating <= 9) {
        result = 'greenyellow';
      } else if (rating >= 5 && rating < 7) {
        result = 'yellow';
      } else if (rating >= 3 && rating < 5) {
        result = 'orange';
      } else {
        result = 'tomato';
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  padding: 1em;
  display: flex;
  flex-direction: column;

  & img {
    margin-bottom: 1rem;
  }

  & h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    text-align: center;
  }

  & .original-title {
    display: block;
    margin-bottom: auto;
    text-align: center;
    font-size: 0.8rem;
    color: #878787;
  }

  & footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
    & .rating {
      background-color: rgb(252, 211, 29);
      padding: 0.25rem;
      border-radius: 0.25em;
      font-weight: 700;
    }

    & .release-date {
      font-size: 0.7rem;
      text-align: right;
    }
  }
}
</style>
