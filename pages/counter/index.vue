<template>
  <section class="container">
    <Counter></Counter>
    <hr />
    <Counter></Counter>
    <hr />
    <Counter></Counter>
    <hr />
    <Counter2></Counter2>
    <hr />
    <Counter2></Counter2>
    <hr />
    <Counter2></Counter2>
  </section>
</template>

<script lang="ts">
import Counter from "../../components/Counter.vue";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {},
  components: { Counter },
});
</script>
