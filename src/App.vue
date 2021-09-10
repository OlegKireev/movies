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
#app {
  @import './../node_modules/normalize-css/normalize.css';

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
