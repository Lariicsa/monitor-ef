<template>
  <div class="columns is-centered">
    <div class="colum is-8">
      <h1>Ingreso</h1>
      <form @submit.prevent="logUser({email:email, pass: pass})" class="box">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" name="email" v-model="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" name="password" autocomplete="on" v-model="pass" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <p class="help is-danger">{{error}}</p>
          </div>
        </div>

        <div class="field">
          <div class="buttons is-centered">
            <button type="submit" class="button is-info">Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Ingreso",
  data(){
      return{
          email: '',
          pass: ''
      }
  },
  methods: {
      ...mapActions(['logUser'])
  },
  computed: {
      ...mapState(['error'])
  }
}

</script>