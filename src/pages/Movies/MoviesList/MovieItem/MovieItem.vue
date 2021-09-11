<template>
  <li>
    {{ movie.title }}
  </li>
</template>
<script>
export default {
  props: {
    movie: Object,
  },
};
</script>
