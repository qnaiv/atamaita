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
                :class="{ 'headache-type-1': selectedImpact == '1' }"
                x-large
                v-on:click="selectImpact('1')"
              >mdi-emoticon-frown-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-2': selectedImpact == '2' }"
                x-large
                v-on:click="selectImpact('2')"
              >mdi-emoticon-cry-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-3': selectedImpact == '3' }"
                x-large
                v-on:click="selectImpact('3')"
              >mdi-emoticon-dead-outline</v-icon>
            </p>
            <v-btn color="primary" v-on:click="addRecordQuickly">とりあえず記録</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <div v-if="!loaded">
          <v-card>
            <v-skeleton-loader type="card-heading"></v-skeleton-loader>
            <v-list>
              <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
              <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
            </v-list>
          </v-card>
        </div>
        <div
          class="mb-3"
          v-for="(monthlyRecords,key) in groupByMonth"
          :key="monthlyRecords.onsetDate"
        >
          <monthly-records :yearMonth="key" :records="monthlyRecords"></monthly-records>
        </div>
        <span v-intersect.quiet="getAdditionalRecords"></span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MonthlyRecords from '~/components/MonthlyRecords.vue'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createHeadacheReport } from '../graphql/mutations'
import * as moment from 'moment'
import { onCreateHeadacheReport } from '../graphql/subscriptions'
import { getHeadacheReport, headacheReportByOwner, listUserSettings } from '../graphql/queries'
import groupBy from 'lodash/groupBy'

export default {
  async created() {
    let user = await Auth.currentUserInfo()
    this.owner = user.username

    let userSettingResponse = await API.graphql(
      graphqlOperation(listUserSettings, { owner: this.owner })
    )
    if(userSettingResponse.data.listUserSettings.items.length >= 0){
      this.userSetting = userSettingResponse.data.listUserSettings.items[0];
      console.log("this.userSetting");
      console.log(this.userSetting);
      
    }

    

    this.listRecords()

    this.selectedImpact = 1
    API.graphql(
      graphqlOperation(onCreateHeadacheReport, { owner: user.username })
    ).subscribe({
      next: response => {
        this.records.unshift(response.value.data.onCreateHeadacheReport)
      }
    })
  },
  computed: {
    groupByMonth() {
      let loader = this.$loading.show()
      let sorted = this.records.sort((a, b) => {
        let aUnix = moment(a.onsetDate + ' ' + a.onsetTime).unix()
        let bUnix = moment(b.onsetDate + ' ' + b.onsetTime).unix()
        return bUnix - aUnix
      })
      let grouped = groupBy(sorted, value =>
        moment(value.onsetDate).format('YYYY年MM月')
      )
      loader.hide()
      return grouped
    }
  },
  data: function() {
    return {
      owner: null,
      selectedImpact: '1',
      records: [],
      userSetting: {},
      loaded: false,
      nextRecordToken: null,
      limit: 9999
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
            curedDate: null,
            curedTime: null,
            impact: this.selectedImpact,
            memo: this.userSetting.template,
            prodrome: false
          }
        })
      )
      loader.hide()
    },
    selectImpact(h) {
      this.selectedImpact = h
    },
    async getAdditionalRecords(entries, observer) {
      if (this.nextRecordToken) {
        let loader = this.$loading.show()
        await this.listRecords()
        loader.hide()
      }
    },
    async listRecords() {
      console.log(this.nextRecordToken)

      API.graphql(
        graphqlOperation(headacheReportByOwner, {
          nextToken: this.nextRecordToken,
          sortDirection: 'DESC',
          limit: this.limit,
          owner: this.owner
        })
      ).then(response => {
        this.records = this.records.concat(
          response.data.headacheReportByOwner.items
        )
        this.loaded = true

        this.nextRecordToken = response.data.headacheReportByOwner.nextToken
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
