import App from '@/App.vue';

import router from '@/router/router';

import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import '@/index.css';
//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css';

//core
import 'primevue/resources/primevue.min.css';

// Plugin
import globalComponent from '@/plugins/globalComponent';

import notify from '@/plugins/notify';

export const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(notify);

app.use(router);
app.use(globalComponent);

app.mount('#app');
