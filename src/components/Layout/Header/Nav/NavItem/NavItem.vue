<template>
  <li>
    <router-link :to="page.path" active-class="active" exact>{{ page.title }}</router-link>
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
  padding: 0.2em 0.5em;
  color: rgba($color: #fefefe, $alpha: 0.6);
  transition: color 0.15s ease;
  outline: none;

  &:focus {
    /* box-shadow: 0 0 0 2px teal, 0 0 0 4px orangered; */
    text-decoration: underline;
  }

  &.active {
    color: #fefefe;
  }
}
</style>
