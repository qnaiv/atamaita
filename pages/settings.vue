<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card class="mx-auto">
          <v-card-title>
            <div>設定</div>
          </v-card-title>
          <v-card-text class="text-center">
            <v-textarea outlined v-model="template" label="テンプレート" placeholder="記録を作成したとき、デフォルトで入力されます"></v-textarea>
            <amplify-sign-out></amplify-sign-out>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function(){
    return {
      template: ""
    }
  }
}
</script>

<style>
</style>