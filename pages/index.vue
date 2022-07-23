<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
    <router-link to="/myPage">My Page</router-link>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data: () => {
    return {
      message: "Hello , World !",
    };
  },
});
</script>
