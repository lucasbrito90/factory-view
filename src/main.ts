import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { router } from './router';

import '@/scss/style.scss';
import VueTablerIcons from 'vue-tabler-icons';
import VueApexCharts from 'vue3-apexcharts';
import Vue3Marquee from 'vue3-marquee';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';

import SvgSprite from '@/components/shared/SvgSprite.vue';

// google-fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

//Mock Api data
import { fakeBackend } from '@/utils/helpers/fake-backend';
import './_mockApis';

import { vMaska } from 'maska';
// print
import print from 'vue3-print-nb';
// Table
import Vue3EasyDataTable from 'vue3-easy-data-table';
//i18
import messages from '@/utils/locales/messages';
import axios from 'axios';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});

const app = createApp(App);
fakeBackend();

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(PerfectScrollbarPlugin);
app.component('SvgSprite', SvgSprite);
app.use(pinia);
app.use(VueTablerIcons);
app.use(print);
app.use(Vue3Marquee);
app.use(i18n);
app.directive('maska', vMaska);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');

import './axios';
import { useAlertStore } from './stores/alert';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const alert = useAlertStore();

    if (error.response && error.response.data) {
      alert.addError(error.response.data.message);
    }

    return Promise.reject(error);
  }
);
