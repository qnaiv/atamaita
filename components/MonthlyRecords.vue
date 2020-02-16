<template>
  <v-card>
    <v-card-text>
      <v-list two-line>
        <v-subheader class="headline">{{yearMonth}}</v-subheader>
        <v-list-item-group active-class="pink--text">
          <template v-for="(record, index) in records">
            <v-list-item :key="record.id">
              <v-list-item-content>
                <nuxt-link :to="{name:'record-id', params: { id: record.id}}">
                  <v-list-item-subtitle>{{record.datetime | dateFormat('YYYY/MM/DD HH:mm')}}</v-list-item-subtitle>
                  <v-list-item-title>{{record.headacheType}}</v-list-item-title>
                  <v-list-item-subtitle class="text--primary">
                    前駆症状: {{record.prodrome}}
                    <br />
                    直前に行ったこと: {{record.lastAction}}
                  </v-list-item-subtitle>
                </nuxt-link>
              </v-list-item-content>
            </v-list-item>

            <v-divider v-if="index + 1 < records.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    yearMonth: String,
    records: Array
  }
}
</script>

<style>
</style>