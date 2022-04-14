<template>
  <div class="card-container">
    <img :src="image" alt="avatar" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
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
  gap: 20px;
  padding: 8px;
  background: #ffffff;
  height: 80px;
  border-radius: 24px;
  cursor: pointer;
}
p {
  margin: 0;
  font-size: 1.4em;
  font-weight: 400;
  text-align: left;
}
img {
  height: 100%;
  border-radius: 50%;
}
</style>
