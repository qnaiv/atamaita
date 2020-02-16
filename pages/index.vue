<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text class="text-center">
            <v-btn color="primary" v-on:click="addRecordQuickly">とりあえず記録</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <monthly-records yearMonth="2020/01" :records="headacheRecords"></monthly-records>
      </v-col>
    </v-row>
    <v-fab-transition>
      <nuxt-link :to="{name: 'record'}">
        <v-btn color="primary" fab fixed bottom right class="v-btn--example">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </nuxt-link>
    </v-fab-transition>
  </v-container>
</template>

<script>
import MonthlyRecords from '~/components/MonthlyRecords.vue'
export default {
  computed: {
    headacheRecords() {
      return this.$store.state.records.list
    }
  },
  methods: {
    addRecordQuickly() {
      this.$store.commit('records/add', {
        datetime: new Date()
      })
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
    MonthlyRecords
  }
}
</script>
