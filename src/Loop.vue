<script setup>
import { ref } from 'vue';
const isShow = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
    <button @click="isShow = !isShow">
        切换列表可见性
    </button>
    <button @click="list.push(list.length + 1)">
        push Number
    </button>
    <button @click="list.pop()">
        Pop Number
    </button>
    <button @click="list.reverse()">
        Reverse List
    </button>
    <ul v-if="isShow">
        <li v-for="number of list ">{{ number }}</li>
    </ul>
    <p v-else-if="isShow == false && list.length">不显示列表,但是列表不为空</p>
    <p v-else>列表为空</p>
</template>
<style></style>