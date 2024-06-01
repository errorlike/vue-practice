import { createApp } from 'vue';
import UserInput from './UserInput.vue';
//绑定index.html中的id为app的id
//容器不视为app的一部分。
createApp(UserInput).mount('#app');