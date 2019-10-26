import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
var firebase = require("firebase/app");
require("firebase/auth");
require("./scss/index.scss");

var firebaseConfig = {
  apiKey: "AIzaSyB_wt6X53qF6tEbG9lzWTZugXaEwJPDPJU",
  authDomain: "monitoref-67022.firebaseapp.com",
  databaseURL: "https://monitoref-67022.firebaseio.com",
  projectId: "monitoref-67022",
  storageBucket: "monitoref-67022.appspot.com",
  messagingSenderId: "528687573697",
  appId: "1:528687573697:web:be41be752ef231d43bc240",
  measurementId: "G-39RZ655KDD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;
firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user) {
    store.dispatch('isLoggedUser', {email: user.email, uid: user.uid})
  } else {
    store.dispatch('isLoggedUser', null)
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
