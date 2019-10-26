<template>
  <div class="columns is-centered">
    <div class="colum is-8">
      <h1>Registro</h1>
      <form @submit.prevent="createUser({email:email, pass: pass1})" class="box">
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
            <input class="input" type="password" name="password" autocomplete="on" v-model="pass1" />
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
          <label class="label">Confirmar contraseña</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" name="password" autocomplete="on" v-model="pass2" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <div class="buttons is-centered">
            <button type="submit" class="button is-info" :disabled="!deactivate">Registrar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Registro",
  data(){
      return{
          email: '',
          pass1: '',
          pass2: ''
      }
  },
  methods: {
      ...mapActions(['createUser'])
  },
  computed: {
      ...mapState(['error']),
      deactivate(){
          return this.pass1 === this.pass2 && this.pass2 !== ''
      }
  }
}

</script>