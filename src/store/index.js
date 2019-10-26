import Vue from 'vue'
import Vuex from 'vuex'
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
            })
            .catch(err=>{
                console.log(err.message);
                commit('setError', err.message)
            })
        }
    }
})