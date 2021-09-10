<template>
  <li>
    <a :href="page.path">{{ page.title }}</a>
  </li>
</template>

<script>
export default {
  props: {
    page: Object,
  },
};
</script>

<style lang="scss" scoped>
a {
  color: rgba($color: #fefefe, $alpha: 0.6);
  transition: color 0.15s ease;
}
</style>
