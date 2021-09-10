<template>
  <nav>
    <ul>
      <NavItem v-for="page of pages" :key="page.id" v-bind:page="page" />
    </ul>
  </nav>
</template>

<script>
import NavItem from './NavItem/NavItem';
export default {
  components: {
    NavItem,
  },
  data() {
    return {
      pages: [
        {
          id: 1,
          title: 'Home',
          path: '/',
        },
        {
          id: 2,
          title: 'About',
          path: '/about',
        },
        {
          id: 3,
          title: 'Movies',
          path: '/movies',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > li:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
