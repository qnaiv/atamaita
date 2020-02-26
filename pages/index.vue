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
        <div class="mb-3" v-for="(monthlyRecords,key) in groupByMonth" :key="monthlyRecords.onsetDate">
          <monthly-records :yearMonth="key" :records="monthlyRecords"></monthly-records>
        </div>
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
import groupBy from "lodash/groupBy"

export default {
  async asyncData(){
    let response = await API.graphql(graphqlOperation(listHeadacheReports));
    return {
      records: response.data.listHeadacheReports.items
    }
  },
  created: async function() {
    this.selectedImpact = 1

    let user = await Auth.currentUserInfo()
    API.graphql(graphqlOperation(onCreateHeadacheReport, {owner: user.username})).subscribe({
      next: response => {
        this.records.unshift(response.value.data.onCreateHeadacheReport)
      }
    })
  },
  computed: {
    groupByMonth() {
      let sorted = this.records.sort((a,b)=>{
        let aUnix = moment(a.onsetDate + " " + a.onsetTime).unix()
        let bUnix = moment(b.onsetDate + " " + b.onsetTime).unix()
        return bUnix - aUnix
        }
      )
      let grouped = groupBy(sorted, value => moment(value.onsetDate).format("YYYY年MM月"))
      
      return grouped;
    }
  },
  data: function() {
    return {
      selectedImpact: null,
      records: []
    }
  },
  methods: {
    async addRecordQuickly() {
      
      let loader = this.$loading.show()
      let now = moment()
      await API.graphql(
        graphqlOperation(createHeadacheReport, {
          input: {
            onsetDate: now.format('YYYY-MM-DD'),
            onsetTime: now.format('HH:mm'),
            impact: this.selectedImpact
          }
        })
      )
      loader.hide()
    },
    selectImpact(h) {
      this.selectedImpact = h
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
    MonthlyRecords
  }
}
</script>
