import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/Registro.vue'),
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router;
