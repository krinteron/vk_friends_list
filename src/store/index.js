import Vue from 'vue';
import Vuex from 'vuex';
const OAuth = require('@zalando/oauth2-client-js');
import jsonp from 'jsonp';
import qs from 'qs';

const vkID = 8136790;
const vkUrl = 'https://oauth.vk.com/authorize';
const redirecUri = 'https://krinteron.github.io/vk_friends_list/';

const vkProvider = new OAuth.Provider({
  id: vkID,
  authorization_url: vkUrl,
});

const accessParams = {
  client_id: vkID,
  display: 'popup',
  redirect_uri: redirecUri,
  scope: ['offline'],
  response_type: 'code',
  v: '5.131',
  revoke: 1,
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    friendsList: {
      friends: [],
      selectedFriends: [],
    },
    status: 'disconnected',
  },
  getters: {
    getFriends(state) {
      return state.friendsList;
    },
    getStatus(state) {
      return state.status === 'connected';
    },
  },
  mutations: {
    addFriends(state, friends) {
      state.friendsList.friends = [...friends];
    },
    deleteFriends(state) {
      state.friendsList.friends.splice(0);
      state.friendsList.selectedFriends.splice(0);
    },
    saveFriends(state, friends) {
      state.friendsList = { ...friends };
    },
    addToSelected(state, value) {
      state.friendsList.selectedFriends.push(value);
    },
    setStatus(state, value) {
      state.status = value;
    },
  },
  actions: {
    moveFriends({ commit }, friends) {
      commit('saveFriends', friends);
    },

    logFriends({ getters }) {
      const { selectedFriends } = getters.getFriends;
      console.log(JSON.stringify(selectedFriends, null, 4));
    },

    fetchFriends() {
      const request = new OAuth.Request(accessParams);
      const uri = vkProvider.requestToken(request);
      vkProvider.remember(request);
      window.location.href = uri;
    },

    getFriends({ commit }) {
      const url = window.location;
      try {
        vkProvider.parse(url.hash + '&token_type=bearer');
        const token = vkProvider.getAccessToken();
        if (!token) {
          commit('deleteFriends');
          return;
        }
        return new Promise((resolve) => {
          const param = qs.stringify({
            user_id: 368862537,
            order: 'name',
            fields: 'nickname,photo_100',
            name_case: 'nom',
            access_token: token,
            v: 5.131,
          });
          jsonp(
            `https://api.vk.com/method/friends.get?${param}`,
            function (err, data) {
              if (err) {
                console.error(err.message);
                commit('setStatus', 'disconnected');
                commit('deleteFriends');
              } else {
                commit('setStatus', 'connected');
                commit('addFriends', data.response.items);
              }
              return resolve();
            }
          );
        });
      } catch {
        (e) => console.log(e);
      }
    },

    //Api не предусматривает разлогин.
    cancelToken({ commit }) {
      commit('setStatus', 'disconnected');
      commit('deleteFriends');
      window.localStorage.clear();
      window.open('https://vk.com/');
    },
  },
  modules: {},
});
