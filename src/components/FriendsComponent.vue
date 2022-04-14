<template>
  <div class="container">
    <FriendsList
      title="friend list"
      @click="$emit('login')"
      :label="connected ? 'logout' : 'login'"
    >
      <draggable
        :list="friends"
        :group="{ name: 'friends' }"
        v-bind="dragOptions"
      >
        <UserCard
          v-for="friend of friends"
          :key="friend.id"
          :image="friend.photo_100"
          :name="`${friend.first_name} ${friend.last_name}`"
        />
      </draggable>
    </FriendsList>
    <FriendsList
      title="selected friends"
      @click="$emit('export-list')"
      label="export to console"
    >
      <draggable
        v-if="true"
        :list="selectedFriends"
        :group="{ name: 'friends' }"
        v-bind="dragOptions"
        @change="changeList"
      >
        <UserCard
          v-for="friend of selectedFriends"
          :key="friend.id"
          :image="friend.photo_100"
          :name="`${friend.first_name} ${friend.last_name}`"
        />
      </draggable>
    </FriendsList>
  </div>
</template>

<script>
import FriendsList from './FriendsList.vue';
import UserCard from './UserCard.vue';
import draggable from 'vuedraggable';
export default {
  name: 'FriendsComponent',
  components: {
    FriendsList,
    UserCard,
    draggable,
  },
  props: {
    value: {
      type: Object,
    },
    connected: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['login', 'export-list'],
  computed: {
    dragOptions() {
      return {
        scrollSensitivity: 80,
        forceFallback: true,
        class: 'main dragArea',
      };
    },
  },
  async created() {
    await this.$store.dispatch('getFriends');
    this.importData();
  },
  data() {
    return {
      friends: [],
      selectedFriends: [],
    };
  },
  methods: {
    importData() {
      const { friends, selectedFriends } = JSON.parse(
        JSON.stringify(this.value)
      );
      this.friends = friends;
      this.selectedFriends = selectedFriends;
      this.changeList();
    },
    changeList() {
      this.$emit('input', {
        friends: this.friends,
        selectedFriends: this.selectedFriends,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 1366px) {
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
  width: 1000px;
  // height: 800px;
  background: #f5eae6;
  border-radius: 44px;
  margin: auto;
  padding: 30px;
}
.main {
  flex-grow: 1;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
