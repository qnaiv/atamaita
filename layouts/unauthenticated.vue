<template>
  <v-app dark>
    <v-app-bar fixed app color="primary" dark flat>
      <NuxtLink to="/">
        <v-toolbar-title id="logo" class="white--text font-weight-thin">
          <v-icon>mdi-flash</v-icon>
          <span>{{title}}</span>
        </v-toolbar-title>
      </NuxtLink>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content class="text-center mt-4">
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