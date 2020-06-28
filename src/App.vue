<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <div v-for="(page, index) in pages" :key="page.key + index">
        <Widget :page="page" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Widget from "./components/Widget.vue";
import { config } from "./config/api";

export default Vue.extend({
  name: "App",
  components: {
    Widget
  },
  data() {
    return {
      pages: config
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: grid;
  padding: 40px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 30px;
}
</style>
