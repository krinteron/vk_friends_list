<template>
  <div class="friends-item">
    <header>
      <p>{{ title }}</p>
    </header>
    <section class="main">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </section>
    <footer><b-button variant="primary">Login</b-button></footer>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';
export default {
  name: 'FriendsList',
  components: {
    UserCard,
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
};
</script>

<style scoped lang="scss">
.friends-item {
  margin: 0;
  padding: 0;
  // flex-grow: 1;
  width: 50%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: #f0f1f4;
  box-shadow: 1px 0px 4px 0px #00000040;
  border-radius: 22px;
  overflow: hidden;
}
p {
  margin: 0;
}
header {
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
}
.main {
  flex-grow: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
footer {
  height: 80px;
}
header,
footer {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #f7f6f6;
}
</style>
