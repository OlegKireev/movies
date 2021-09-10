<template>
  <header>
    <div class="container">
      <span>Logo</span>
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from './Nav/Nav';
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #232323;
  padding: 1rem 0;
  color: #fefefe;

  & > .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
