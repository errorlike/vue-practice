<script setup>
import { ref } from 'vue';
const isRed = ref(true);
const color = ref('green');
const toggleColor = () => {
    color.value = color.value === 'green' ? 'blue' : 'green';
};
const toggleRed = () => {
    isRed.value = !isRed.value;
};
</script>

<template>
    <p :title="'hover'">悬停显示文本</p>
    <p :class="{ red: isRed }" @click="toggleRed">点击切换颜色</p>
    <p :style="{ color }" @click="toggleColor">在蓝色和绿色直接切换</p>
</template>

<style>
.red {
    color: red;
}
</style>