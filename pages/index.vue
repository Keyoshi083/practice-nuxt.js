<template>
  <section class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <p>{{ $store.state.hello.message }}</p>
      <!-- <button @click="$store.commit('updateMessage')">Update</button> -->
      <input type="text" name="input" id="inputText" v-model="inputText" />
      <button @click="updateMessage">Update</button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    updateMessage() {
      //   this.$store.commit("updateMessage", this.inputText);
      // this.$store.dispatch("updateMessageAction", this.inputText);
      this.$store.dispatch("hello/updateMessageAction", this.inputText);
    },
  },
};
</script>
