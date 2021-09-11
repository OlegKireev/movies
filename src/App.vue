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
@import './scss/common.scss';
</style>
