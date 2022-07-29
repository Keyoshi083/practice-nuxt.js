<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="counter-body">
      <span class="counter-content">Counter : {{ counter }}</span>
      <button class="counter-content" @click="plusCount">+1</button>
      <button class="counter-content" @click="minusCount">-1</button>
      <button class="counter-content" @click="resetCount">reset</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Counter",
  data() {
    return {
      title: "Counter App",
      counter: 0,
    };
  },
  methods: {
    plusCount() {
      this.counter++;
    },
    minusCount() {
      if (this.counter > 0) this.counter--;
    },
    resetCount() {
      this.counter = 0;
    },
  },
});
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
