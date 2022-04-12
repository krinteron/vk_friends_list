<template>
  <div class="container">
    <FriendsList title="friend list" />
    <FriendsList title="selected friends" />
  </div>
</template>

<script>
import FriendsList from './FriendsList.vue';
export default {
  name: 'FriendsComponent',
  components: {
    FriendsList,
  },
};
</script>

<style scoped lang="scss">
@media only screen and (max-width: 1920px) {
  .container {
    height: 800px;
  }
}

@media only screen and (max-width: 1366px) {
  .container {
    height: 500px;
  }
}
.container {
  display: flex;
  gap: 30px;
  width: 1200px;
  background: #f5eae6;
  border-radius: 44px;
  margin: auto;
  padding: 30px;
}
</style>
