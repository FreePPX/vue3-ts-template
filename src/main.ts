import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

//element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import './components/global.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
