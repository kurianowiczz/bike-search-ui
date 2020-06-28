<template>
  <div class="widget">
    <div class="header">
      {{ page.title }}
    </div>
    <div class="description">{{ page.description }}</div>
    <div class="path">
      <div class="method">
        {{ page.method }}
      </div>
      <div class="inner">
        {{ page.path }}
      </div>
    </div>
    <button class="btn" @click="onClick()">Test route</button>
    <div class="schema" v-if="showSchema">
      <div v-for="field in page.schema" :key="field">
        <input
          class="field"
          type="text"
          :placeholder="field"
          v-model="postObj[field]"
        />
      </div>
      <button class="btn-post" @click="onPostClick()">Send</button>
    </div>
    <div class="result">
      <textarea
        name="result"
        id="result"
        class="area"
        v-model="result"
        disabled="true"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "@/config/api";

export default Vue.extend({
  name: "Widget",
  data() {
    return {
      result: "",
      postObj: {},
      showSchema: false
    };
  },
  props: {
    page: Object
  },
  methods: {
    async onClick() {
      const { method, path } = this.page;
      if (method === "get") {
        const { data } = await axios.get(path);
        this.result = JSON.stringify(data, undefined, 2);
      } else {
        this.showSchema = true;
      }
    },
    async onPostClick() {
      const { data } = await axios.post(this.page.path, this.postObj);
      this.result = JSON.stringify(data, undefined, 2);
    }
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
  background-color: #29bdb3;
  padding: 10px;
  text-align: start;
  color: black;
}

.description {
  opacity: 0.7;
  padding: 10px;
  text-align: start;
  white-space: pre;
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
  background-color: #472ed2;
  border-radius: 3px;
  color: white;
  width: max-content;
  padding: 5px 10px;
}

.btn {
  border: none;
  background-color: #ff005c;
  cursor: pointer;
  outline: none;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
}

.field {
  padding: 3px;
  border-radius: 2px;
  border: 1px solid grey;
  margin-bottom: 10px;
  width: 50%;
  box-sizing: border-box;
}

.schema {
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn-post {
  width: 50%;
  padding: 10px;
  border: none;
  background-color: #472ed2;
  color: white;
  outline: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
}

.area {
  width: 100%;
  border: none;
  resize: none;
  height: 200px;
}
</style>
