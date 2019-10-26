import Vue from 'vue';
import Router from 'vue-router';
const firebase = require("firebase/app")

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) =>{
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
  var user = firebase.auth().currentUser

  if(protectedRoute === true && user === null) {
    next({name: 'ingreso'})
  } else {
    next()
  }
})

export default router;
