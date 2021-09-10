<template>
  <div>
    <Header />
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './Header/Header';
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
