<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-title class="headline">編集</v-card-title>
          <v-card-text>
            <p class>
              <v-icon
                :class="{ 'headache-type-1': targetRecord.impact == 1 }"
                x-large
                v-on:click="selectImpact(1)"
              >mdi-emoticon-frown-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-2': targetRecord.impact == 2 }"
                x-large
                v-on:click="selectImpact(2)"
              >mdi-emoticon-cry-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-3': targetRecord.impact == 3 }"
                x-large
                v-on:click="selectImpact(3)"
              >mdi-emoticon-dead-outline</v-icon>
            </p>
            <v-menu
              ref="datepicker"
              v-model="datepicker"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="targetRecord.onsetDate"
                  label="発症日"
                  readonly
                  prepend-icon="mdi-calendar"
                  @click:clear="targetRecord.onsetDate = null"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="targetRecord.onsetDate" no-title @input="datepicker = false"></v-date-picker>
            </v-menu>

            <v-menu
              ref="timepicker"
              v-model="timepicker"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="targetRecord.onsetTime"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="targetRecord.onsetTime"
                  label="発症時刻"
                  prepend-icon="mdi-clock"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="timepicker"
                v-model="targetRecord.onsetTime"
                full-width
                @click:minute="$refs.timepicker.save(targetRecord.onsetTime)"
              ></v-time-picker>
            </v-menu>

            <v-textarea v-model="targetRecord.memo" label="メモ"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" v-on:click="createRecord">更新</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as moment from 'moment'
import { graphqlOperation, API, Auth } from 'aws-amplify'
import { getHeadacheReport } from '../../graphql/queries'
import { createHeadacheReport } from '../../graphql/mutations'

export default {
  async asyncData({ params }) {
    let now = moment()

    return {
      targetRecord: {
        onsetDate: now.format('YYYY-MM-DD'),
        onsetTime: now.format('HH:mm'),
        impact: 1,
        memo: ''
      }
    }
  },
  data: function() {
    return {
      datepicker: false,
      timepicker: false
    }
  },
  methods: {
    async createRecord() {
      let loader = this.$loading.show()
      await API.graphql(
        graphqlOperation(createHeadacheReport, { input: this.targetRecord })
      )
      loader.hide()
      this.$router.push({ name: 'index' })
    },
    selectImpact(h) {
      this.targetRecord.impact = h
    }
  }
}
</script>

<style>
</style>