<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card class="mx-auto">
          <v-card-title>
            <div class="overline">クイック記録</div>
          </v-card-title>
          <v-card-text class="text-center">
            <p>
              <v-icon
                :class="{ 'headache-type-1': selectedImpact == 1 }"
                x-large
                v-on:click="selectImpact(1)"
              >mdi-emoticon-frown-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-2': selectedImpact == 2 }"
                x-large
                v-on:click="selectImpact(2)"
              >mdi-emoticon-cry-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-3': selectedImpact == 3 }"
                x-large
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
        <monthly-records yearMonth="2020年1月" :records="records"></monthly-records>
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
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createHeadacheReport } from '../graphql/mutations'
import * as moment from 'moment'
import { onCreateHeadacheReport } from '../graphql/subscriptions'
import { getHeadacheReport, listHeadacheReports } from '../graphql/queries'
export default {
  created: async function() {
    this.selectedImpact = 1

    API.graphql(graphqlOperation(listHeadacheReports)).then(response => {
      this.records = response.data.listHeadacheReports.items
    })
    let user = await Auth.currentUserInfo()
    
    API.graphql(graphqlOperation(onCreateHeadacheReport, {owner: user.username})).subscribe({
      next: response => {
        this.records.unshift(response.value.data.onCreateHeadacheReport)
      }
    })
  },
  computed: {
    headacheRecords() {
      console.log(this.$store.state.records.list)

      return this.$store.state.records.list
    }
  },
  data: function() {
    return {
      selectedImpact: null,
      records: []
    }
  },
  methods: {
    addRecordQuickly() {
      let now = moment()

      API.graphql(
        graphqlOperation(createHeadacheReport, {
          input: {
            onsetDate: now.format('YYYY-MM-DD'),
            onsetTime: now.format('HH:mm'),
            impact: this.selectedImpact
          }
        })
      )
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
