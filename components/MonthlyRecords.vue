<template>
  <v-card>
          <v-card-title>
            <div class="overline">記録一覧</div>
          </v-card-title>
    <v-card-text>
      <v-list two-line dense>
        <v-subheader class="headline">{{yearMonth}}</v-subheader>
        <v-list-item-group active-class="pink--text">
          <template v-for="(record, index) in records">
            <nuxt-link :to="{name:'record-id', params: { id: record.id}}" :key="record.id">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ record.onsetDate | moment("DD日") }} {{record.onsetTime}}
                    <!-- <v-icon color="orange darken-2">mdi-weather-sunny</v-icon> -->
                  </v-list-item-title>
                  <p class="memo">{{record.memo}}</p>
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
.memo{
  white-space: pre-line;
  color: gray;
  font-size: 0.9em;
}
</style>