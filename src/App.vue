<template>
  <div id="app">
    <FriendsComponent />
  </div>
</template>

<script>
import FriendsComponent from './components/FriendsComponent.vue';

export default {
  name: 'App',
  components: {
    FriendsComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
