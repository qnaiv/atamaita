<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-title class="headline">編集</v-card-title>
          <v-card-text>
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
                  :value="formatOnsetDate"
                  label="Date"
                  prepend-icon="mdi-calendar"
                  @click:clear="unformattedOnsetDate = null"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="unformattedOnsetDate" no-title @input="datepicker = false"></v-date-picker>
            </v-menu>
            <p>
              <v-icon
                :class="{ 'headache-type-1': targetRecord.impact == 1 }"
                large
                v-on:click="selectImpact(1)"
              >mdi-emoticon-frown-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-2': targetRecord.impact == 2 }"
                large
                v-on:click="selectImpact(2)"
              >mdi-emoticon-cry-outline</v-icon>
              <v-icon
                :class="{ 'headache-type-3': targetRecord.impact == 3 }"
                large
                v-on:click="selectImpact(3)"
              >mdi-emoticon-dead-outline</v-icon>
            </p>
            <v-textarea v-model="targetRecord.memo" label="memo"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" v-on:click="updateRecord">更新</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { cloneDeep } from 'lodash'
import * as moment from 'moment'

export default {
  created: function() {
    let records = cloneDeep(this.$store.state.records.list)

    this.targetRecord = records.find(record => {
      return record.id == this.$route.params.id
    })

    this.unformattedOnsetDate = moment(this.targetRecord.onsetDate).format(
      'YYYY-MM-DD'
    )
  },
  data: function() {
    return {
      targetRecord: {},
      datepicker: false,
      unformattedOnsetDate: null
    }
  },
  computed: {
    formatOnsetDate() {
      if (!this.unformattedOnsetDate) {
        return ''
      }
      let m = moment(this.unformattedOnsetDate)
      this.targetRecord.onsetDate = m.toDate().getTime()
      return this.unformattedOnsetDate
    }
  },
  methods: {
    updateRecord() {
      this.$store.commit('records/update', this.targetRecord)
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