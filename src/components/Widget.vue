<template>
  <div class="widget">
    <div class="header">
      {{ page.title }}
    </div>
    <div class="description">
      {{ page.description }}
    </div>
    <div class="path">
      <div class="method">
        {{ page.method }}
      </div>
      <div class="inner">
        {{ page.path }}
      </div>
    </div>
    <button class="btn">Test route</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Widget",
  props: {
    page: Object
  }
});
</script>

<style scoped>
.widget {
  display: grid;
  border-radius: 3px;
  border: 1px solid #c6baba;
  box-shadow: 0 5px 10px #c6baba;
}

.header {
  background-color: #ffe4c4;
  padding: 10px;
  text-align: start;
}

.description {
  opacity: 0.7;
  padding: 10px;
  text-align: start;
}

.path {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 10px;
  background-color: aliceblue;
  padding: 5px;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  align-items: center;
}

.inner {
}

.method {
  background-color: blueviolet;
  border-radius: 3px;
  color: white;
  width: max-content;
  padding: 5px 10px;
}

.btn {
  border: none;
  background-color: coral;
  cursor: pointer;
  outline: none;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  border-radius: 3px;
}
</style>
