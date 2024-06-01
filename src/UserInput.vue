<script setup>
import { ref } from 'vue';
const message = ref("hello world");
const reverseMessage = () => {
  message.value = message.value.split('').reverse().join('');
};
const append = () => {
  message.value += '!';
};
const notify = () => {
  alert("阻止了打开vue官网的行为");
};
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">ReverseMessage</button>
  <button @click="append">Append"!"</button>
  <a href="https://cn.vuejs.org/" @click.prevent="notify">阻止link标签的默认事件</a>
</template>

<style>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>