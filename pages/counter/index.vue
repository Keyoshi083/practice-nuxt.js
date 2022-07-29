<template>
  <section class="container">
    <Counter></Counter>
    <hr />
    <Counter></Counter>
    <hr />
    <Counter></Counter>
  </section>
</template>

<script lang="ts">
import Counter from "../../components/Counter.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { Counter },
};
</script>
