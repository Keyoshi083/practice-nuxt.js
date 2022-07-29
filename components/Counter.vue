<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="counter-body">
      <span class="counter-content"
        >Counter : {{ $store.state.counter.count }}</span
      >
      <button class="counter-content" @click="plusCount">+1</button>
      <button class="counter-content" @click="minusCount">-1</button>
      <button class="counter-content" @click="resetCount">reset</button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      title: "Counter App",
    };
  },
  methods: {
    plusCount() {
      this.$store.commit("counter/plusCount");
    },
    minusCount() {
      this.$store.commit("counter/minusCount");
    },
    resetCount() {
      this.$store.commit("counter/resetCount");
    },
  },
};
</script>
<style scoped>
.counter-body {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.counter-content {
  margin: 4px;
}
</style>
