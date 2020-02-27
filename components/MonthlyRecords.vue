<template>
  <v-card>
    <!-- <v-card-title>
            <div class="overline">記録一覧</div>
    </v-card-title>-->
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
                    <span v-if="record.prodrome" class="tag">前駆症状あり</span>
                  </v-list-item-title>
                  <p class="memo">{{record.memo}}</p>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>
                    <span v-if="record.duration">{{record.duration}} hr</span>
                  </v-list-item-action-text>
                  <v-icon color="blue darken-2" v-if="record.impact == 1">mdi-emoticon-frown-outline</v-icon>
                  <v-icon
                    color="orange darken-2"
                    v-else-if="record.impact == 2"
                  >mdi-emoticon-cry-outline</v-icon>
                  <v-icon
                    color="red darken-2"
                    v-else-if="record.impact == 3"
                  >mdi-emoticon-dead-outline</v-icon>
                </v-list-item-action>
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
import * as moment from 'moment'
export default {
  props: {
    yearMonth: String,
    records: Array
  },
  computed: {}
}
</script>

<style>
.memo {
  white-space: pre-line;
  color: gray;
  font-size: 0.9em;
}
</style>