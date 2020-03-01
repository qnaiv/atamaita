<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-title class="headline">
            編集
            <v-spacer />
            <v-icon v-on:click="deleteRecord">mdi-delete</v-icon>
          </v-card-title>
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
            <v-row no-gutters>
              <v-col cols="8" class="pr-1">
                <v-dialog ref="onsetDatepicker" v-model="onsetDatepicker" width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      :value="targetRecord.onsetDate"
                      label="発症日"
                      readonly
                      @click:clear="targetRecord.onsetDate = null"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="targetRecord.onsetDate"
                    no-title
                    @input="onsetDatepicker = false"
                  ></v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="4" class="pl-1">
                <v-dialog ref="onsetTimepicker" v-model="onsetTimepicker" width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      v-model="targetRecord.onsetTime"
                      label="時刻"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="onsetTimepicker"
                    v-model="targetRecord.onsetTime"
                    full-width
                    @click:minute="$refs.onsetTimepicker.save(targetRecord.onsetTime)"
                  ></v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8" class="pr-1">
                <v-dialog ref="curedDatepicker" v-model="curedDatepicker" width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      :value="targetRecord.curedDate"
                      label="治った日"
                      readonly
                      @click:clear="targetRecord.curedDate = null"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="targetRecord.curedDate"
                    no-title
                    @input="curedDatepicker = false"
                  ></v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="4" class="pl-1">
                <v-dialog ref="curedTimepicker" v-model="curedTimepicker" width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      v-model="targetRecord.curedTime"
                      label="時刻"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="curedTimepicker"
                    v-model="targetRecord.curedTime"
                    full-width
                    @click:minute="$refs.curedTimepicker.save(targetRecord.curedTime)"
                  ></v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-textarea outlined v-model="targetRecord.memo" label="メモ"></v-textarea>
            <v-checkbox v-model="targetRecord.prodrome" label="前駆症状があった" class="mt-0"></v-checkbox>
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
import { graphqlOperation, API, Auth } from 'aws-amplify'
import { getHeadacheReport } from '../../graphql/queries'
import {
  updateHeadacheReport,
  deleteHeadacheReport
} from '../../graphql/mutations'

export default {
  async asyncData({ params }) {
    let response = await API.graphql(
      graphqlOperation(getHeadacheReport, { id: params.id })
    )
    return {
      targetRecord: response.data.getHeadacheReport
    }
  },
  data: function() {
    return {
      onsetDatepicker: false,
      curedDatepicker: false,
      onsetTimepicker: false,
      curedTimepicker: false
    }
  },
  methods: {
    async updateRecord() {
      let loader = this.$loading.show()
      delete this.targetRecord.owner
      await API.graphql(
        graphqlOperation(updateHeadacheReport, { input: this.targetRecord })
      )
      loader.hide()
      this.$router.push({ name: 'index' })
    },
    async deleteRecord() {
      let loader = this.$loading.show()
      await API.graphql(
        graphqlOperation(deleteHeadacheReport, {
          input: { id: this.targetRecord.id }
        })
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