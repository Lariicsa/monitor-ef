<template>
  <div class="columns is-centered">
    <div class="column is-10">
      <h1>Bienvenido</h1>
      <div class="box">
        <p>
          Usuario:
          <strong>{{user.email}}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'home',
  computed: {
    ...mapState(['user'])
  }
};
</script>
