import { createApp } from 'vue';
import { router } from './router/index';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import './assets/main.scss';

const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig);

app.mount('#main');
