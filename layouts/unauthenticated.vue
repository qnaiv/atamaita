<template>
  <v-app dark>  
    <v-content id="signin-container" >
      <nuxt />
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'atamaita'
    }
  }
}
</script>

<style>
</style>