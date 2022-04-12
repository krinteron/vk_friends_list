<template>
  <div class="card-container">
    <img
      src="https://sun1-88.userapi.com/s/v1/if1/rU-gZxHDGC3QSYs2C_K2jjB8zsSUSFxKN2sWifYhqZ5NOwsBsA7kQDD2JOj1v0JxvSOEFWcW.jpg?size=100x100&quality=96&crop=131,296,391,391&ava=1"
      alt="dsfds"
    />
    <p>Popiashvili Levan Guramovich</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    friends: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  padding: 8px;
  background: #ffffff;
  height: 100px;
  border-radius: 24px;
  cursor: pointer;
}
p {
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  text-align: left;
}
img {
  height: 100%;
  border-radius: 50%;
}
</style>
