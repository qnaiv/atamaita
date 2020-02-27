<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" right fixed app color="grey lighten-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>こんにちは、{{loginUserName}}さん！</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 text-center"></div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark flat>
      <NuxtLink to="/">
        <v-toolbar-title id="logo" class="white--text font-weight-thin">
          <v-icon>mdi-flash</v-icon>
          <span>{{title}}</span>
        </v-toolbar-title>
      </NuxtLink>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content id="app-container" class="mb-12">
      <nuxt />
    </v-content>
    <v-bottom-navigation fixed >
      <v-btn to="/">
        <span>ホーム</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn disabled to="/">
        <span>統計</span>
        <v-icon>mdi-chart-line</v-icon>
      </v-btn>

      <v-btn disabled to="/settings">
        <span>出力</span>
        <v-icon>mdi-download</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} qnaiv</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  computed: {
    loginUserName() {
      console.log(this.$store.state.loginuser.name)

      return this.$store.state.loginuser.name
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '使い方',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '新しい頭痛を記録',
          to: '/record'
        },
        {
          icon: 'mdi-tune',
          title: '設定',
          to: '/settings'
        }
      ],
      miniVariant: false,
      rightDrawer: false,
      title: 'atamaita'
    }
  }
}
</script>
