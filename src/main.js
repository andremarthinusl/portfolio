import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App);
app.use(router);

// Make root instance properties available to all components
app.config.globalProperties.$root = app._instance ? app._instance.proxy : {};

app.mount('#app');


