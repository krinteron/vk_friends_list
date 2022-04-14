<template>
  <div class="friends-item">
    <header class="flex-container">
      <p>{{ title }}</p>
    </header>
    <slot></slot>
    <footer class="flex-container">
      <b-button class="btn" variant="primary" @click="$emit('click')">{{
        label
      }}</b-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FriendsList',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    label: {
      type: String,
      default: 'button',
    },
  },
  emits: ['click'],
};
</script>

<style scoped lang="scss">
.friends-item {
  margin: 0;
  padding: 0;
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
.flex-container {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: #f7f6f6;
}
header {
  height: 60px;
  font-size: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
}
footer {
  height: 80px;
  .btn {
    min-width: 150px;
  }
}
</style>
