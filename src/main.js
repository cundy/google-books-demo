import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import VuejsPaginate from 'vuejs-paginate-next';

import App from './App.vue';
import router from './router';
import { messages } from './messages';

const app = createApp(App);
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'fr',
    messages
});

library.add(faCartShopping);
library.add(faFaceFrown);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('paginate-component', VuejsPaginate);


app.mount('#app');
