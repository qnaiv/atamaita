<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text class="text-center">
            <p>
              <v-icon
                :class="{ 'headache-type-1': selectedImpact == 1 }"
                large
                v-on:click="selectImpact(1)"
              >mdi-emoticon-frown-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-2': selectedImpact == 2 }"
                large
                v-on:click="selectImpact(2)"
              >mdi-emoticon-cry-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-3': selectedImpact == 3 }"
                large
                v-on:click="selectImpact(3)"
              >mdi-emoticon-dead-outline</v-icon>
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
  created: function() {
    this.selectedImpact = 1
  },
  computed: {
    headacheRecords() {
      console.log(this.$store.state.records.list)

      return this.$store.state.records.list
    }
  },
  data: function() {
    return {
      selectedImpact: null
    }
  },
  methods: {
    addRecordQuickly() {
      let now = new Date()
      this.$store.commit('records/add', {
        onsetDate: now.getTime(),
        onsetTime: this.getHourName(now.getHours()),
        impact: this.selectedImpact
      })
    },
    selectImpact(h) {
      this.selectedImpact = h
    },
    getHourName(hour) {
      // 朝 　5~10
      // 昼 　11~17
      // 夜 　18~23
      // 深夜 12~4
      if (hour >= 5 && hour <= 10) {
        return '朝'
      } else if (hour >= 11 && hour <= 17) {
        return '昼'
      } else if (hour >= 18 && hour <= 23) {
        return '夜'
      } else if (hour <= 4) {
        return '深夜'
      }
      return ''
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
    MonthlyRecords
  }
}
</script>
