export const state = () => ({
  count: 0,
});

export const mutations = {
  plusCount(state) {
    state.count++;
  },
  minusCount(state) {
    if (state.count > 0) state.count--;
  },
  resetCount(state) {
    state.count = 0;
  },
};
