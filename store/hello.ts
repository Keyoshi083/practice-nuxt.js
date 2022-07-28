/**
 * モジュールモードでのStoreの記述方法
 * @returns
 */
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
