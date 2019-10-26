import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';
var firebase = require("firebase/app");

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: '',
        error: ''
    },
    mutations: {
        setUser(state,payload){
            state.user = payload
        },
        setError(state,payload) {
          state.error = payload
        }
    },
    actions: {
        createUser({commit}, payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
            .then(res=>{
                console.log(res.user.email);
                console.log(res.user.uid);
                commit('setUser', {email: res.user.email, uid: res.user.uid})
                router.push({name: 'home'})
            })
            .catch(err=>{
                console.log(err.message);
                commit('setError', err.message)
            })
        },
        logUser({commit}, payload) {
          firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
          .then(res=>{
            console.log(res);
            commit('setUser', {email: res.user.email, uid: res.user.uid})
            router.push({name: 'home'})
          })
          .catch(err=>{
            console.log(err);
            commit('setError', err.message)
          })
        }
    }
})