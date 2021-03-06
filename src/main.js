// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ecma-proposal-object-values-entries/polyfill';
import Vue from 'vue';
import '@/assets/fonts.scss';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
