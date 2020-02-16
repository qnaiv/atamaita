<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-title class="headline">頭痛を記録</v-card-title>
          <v-card-text>
            <v-datetime-picker label="頭痛が起きた日時" v-model="inputedRecord.datetime">
              <template slot="dateIcon">
                <v-icon>mdi-calendar</v-icon>
              </template>
              <template slot="timeIcon">
                <v-icon>mdi-clock</v-icon>
              </template>
            </v-datetime-picker>

            <v-text-field v-model="inputedRecord.lastAction" label="直前にした行動"></v-text-field>
            <v-text-field v-model="inputedRecord.prodrome" label="前駆症状"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" v-on:click="addRecord">記録する</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      inputedRecord: {
        lastAction: '',
        prodrome: '',
        datetime: null
      }
    }
  },
  methods: {
    addRecord() {
      this.$store.commit('records/add', this.inputedRecord)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style>
</style>