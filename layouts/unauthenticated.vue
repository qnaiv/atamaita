<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark>
      <NuxtLink to="/">
        <v-toolbar-title class="white--text" v-text="title" />
      </NuxtLink>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      title: 'bibi-log'
    }
  }
}
</script>

<style>
</style>