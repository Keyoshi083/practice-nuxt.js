<script lang="ts">
import { computed, ref } from "vue";

// const pageMessage = "User ID Page";
// /**
//  * Composition APIがNuxtで使えている
//  */
// const message = ref("message");
// const computedValue = computed(() => {
//   return "This is Computed.";
// });

/**
 * validate()はVue2の書き方でないと反応しない
 */
export default {
  data() {
    return {
      pageMessage: "User ID Page",
    };
  },
  validate({ params }) {
    return /^\d$/.test(params.id);
  },
  computed: {
    computedValue() {
      return "This is Computed.";
    },
  },
};
</script>

<template>
  <section class="container">
    <p>{{ pageMessage }}</p>
    <p>UserID : {{ this.$route.params.id }}</p>
    <p>{{ computedValue }}</p>
  </section>
</template>
