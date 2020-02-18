<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text class="text-center">
            <p>
              <v-icon large v-on:click="selectHeadacheType(1)">mdi-emoticon-frown-outline</v-icon>
              <v-icon large v-on:click="selectHeadacheType(2)">mdi-emoticon-cry-outline</v-icon>
              <v-icon large v-on:click="selectHeadacheType(3)">mdi-emoticon-dead-outline</v-icon>
            </p>
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
      console.log(this.$store.state.records.list)

      return this.$store.state.records.list
    }
  },
  data: function() {
    return {
      selectedHeadacheType: null
    }
  },
  methods: {
    addRecordQuickly() {
      this.$store.commit('records/add', {
        onsetDate: new Date().getTime(),
        headacheType: this.selectedHeadacheType
      })
    },
    selectHeadacheType(h) {
      this.selectedHeadacheType = h;
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
    MonthlyRecords
  }
}
</script>
