<template>
  <v-card>
    <v-card-text>
      <v-list two-line>
        <v-subheader class="headline">{{yearMonth}}</v-subheader>
        <v-list-item-group active-class="pink--text">
          <template v-for="(record, index) in records">
            <nuxt-link :to="{name:'record-id', params: { id: record.id}}" :key="record.id">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ record.onsetDate | moment("MM/DD") }} {{record.onsetTime}}
                    <!-- <v-icon color="orange darken-2">mdi-weather-sunny</v-icon> -->
                  </v-list-item-title>
                  <v-list-item-subtitle>{{record.memo}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon color="blue darken-2" v-if="record.impact == 1">mdi-emoticon-frown-outline</v-icon>
                  <v-icon
                    color="orange darken-2"
                    v-else-if="record.impact == 2"
                  >mdi-emoticon-cry-outline</v-icon>
                  <v-icon
                    color="red darken-2"
                    v-else-if="record.impact == 3"
                  >mdi-emoticon-dead-outline</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </nuxt-link>

            <v-divider v-if="index + 1 < records.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
  <!-- <div>
    <v-card v-for="(record) in records" :key="record.id" class="mx-auto">
         <v-card-title>
      <v-icon
        large
        left
      >
        mdi-weather-sunny
      </v-icon>
      <span class="title font-weight-light">{{ record.onsetDate | moment("MM/DD") }}</span>
    </v-card-title>

    <v-card-text class="">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>
    </v-card>
  </div>-->
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