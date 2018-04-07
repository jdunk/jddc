import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Demo from '@/components/Demo';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Demo,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
    },
  ],
});
