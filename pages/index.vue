<template>
  <section class="container">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.id }} , {{ comment.name }} , {{ comment.email }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import axios from "axios";
import Vue from "vue";

const url = "https://jsonplaceholder.typicode.com/posts/1/commentss";

export default {
  // data() {
  //   return {
  //     comments: {},
  //   };
  // },
  // mounted() {
  //   axios.get(url).then((res) => (this.comments = res.data));
  // },
  // : {
  //   async fetchComments() {
  //     const comments = await axios.get(url);
  //     return comments;
  //   },
  // },
  /**
   * Nuxtの非同期処理
   * @param param0
   */
  asyncData({ params, error }) {
    return axios
      .get(url)
      .then((res) => {
        return { comments: res.data };
      })
      .catch((err) => {
        // console.error(err.response.status);
        error({ statusCode: err.response.status, message: err.message });
      });
  },
};
// asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {

// },
}
</script>
