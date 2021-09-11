<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group">
      <input type="search" v-model="search" />
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },

  methods: {
    onSubmit() {
      this.$emit('search-movie', this.$data.search);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
}
input[type='search'] {
  width: 100%;
}
</style>
