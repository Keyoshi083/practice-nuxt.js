// Vuex３系の書き方
// import Vuex from "vuex";

// Vuex３系の書き方(かつての書き方)
// const createStore = () => {
//   return new Vuex.Store({
//     state: () => {
//       return {
//         message: "Hello Vuex",
//       };
//     },
//     mutations: {
//       updateMessage: (state) => {
//         state.message = "Updated!";
//       },
//     },
//   });
// };

// export default createStore;
// Nuxt最新版の書き方(stateがanyとなってしまう)
export const state = () => ({
  message: "Hello Vuex",
});

export const mutations = {
  // updateMessage(state) {
  //   state.message = "Updated";
  // },
  updateMessage(state, payload) {
    state.message = payload;
  },
};

export const actions = {
  updateMessageAction(context, payload) {
    context.commit("updateMessage", payload);
  },
};
