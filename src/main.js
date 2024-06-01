import { createApp } from 'vue';
import App from './App.vue';
import UserInput from './UserInput.vue';
//绑定index.html中的id为app的id
//容器不视为app的一部分。
createApp(App).mount('#app');
