<script setup>
import { computed, reactive, ref } from "vue";
// 声明一个count的状态，其初始value = 0
const count = ref(0);
const msg = "message"; // 计算属性
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});
const parentMessage = ref("Parent");
const items = ref([{ message: 'Foo' }, { message: 'Foo' }]);
const publicBookMessage = computed(() => author.books.length > 0 ? 'Yes' : 'No');
const increment = () => {
  count.value++;
};
const now = computed(() => Date.now());
console.log(now.value);
console.log(count);
const firstName = ref('John');
const lastName = ref('Doe');
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ');
  }
});
fullName.value = "lin jia";
console.log(fullName.value);
</script>

<!-- <template> -->
<template>
  <div>hello world</div>
  <span>Message: {{ msg }}</span>
  <!-- 点击事件-->
  <div @click="increment">{{ count }}</div>
  <p>Has published books:</p>
  <span>{{ publicBookMessage }}</span>
  <li v-for="(item, index) in items">
    {{ parentMessage }}-{{ index }} - {{ item.message }}
  </li>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="editme " />
</template>