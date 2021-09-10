<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout/Layout';
export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import './../node_modules/normalize-css/normalize.css';

.container {
  max-width: 1060px;
  padding: 0 1.6rem;
  margin: 0 auto;
}

a,
a:hover,
a:active {
  color: #fefefe;
}

a {
  text-decoration: none;
}
</style>
