<template>
  <div id="app">
    <FriendsComponent
      v-model="friendsList"
      @login="login"
      @export-list="log"
      :connected="connected"
    />
  </div>
</template>

<script>
import FriendsComponent from './components/FriendsComponent.vue';
export default {
  name: 'App',
  components: {
    FriendsComponent,
  },
  computed: {
    connected() {
      return this.$store.getters.getStatus;
    },
  },
  data() {
    return {
      friendsList: this.$store.getters.getFriends,
    };
  },
  watch: {
    friendsList: function (newList) {
      this.changeList(newList);
    },
  },
  methods: {
    changeList(newList) {
      this.$store.dispatch('moveFriends', newList);
    },
    login() {
      if (this.connected) {
        this.$store.dispatch('cancelToken');
      } else {
        this.$store.dispatch('fetchFriends');
      }
    },
    log() {
      this.$store.dispatch('logFriends');
    },
    clear() {
      this.$store.dispatch('cancelToken');
    },
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
