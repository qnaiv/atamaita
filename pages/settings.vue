<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card class="mx-auto">
          <v-card-title>
            <div>設定</div>
          </v-card-title>
          <v-card-text class="text-center">
            <v-textarea
              outlined
              v-model="userSetting.template"
              label="テンプレート"
              placeholder="記録を作成したとき、デフォルトで入力されます"
            ></v-textarea>
            <v-btn color="primary" v-on:click="saveUserSettings" class="mb-5">保存</v-btn>
            <v-divider class="mb-5"></v-divider>
            <amplify-sign-out></amplify-sign-out>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { listUserSettings } from '../graphql/queries'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createUserSetting, updateUserSetting } from '../graphql/mutations'

export default {
  async created() {
    let loader = this.$loading.show()
    let user = await Auth.currentUserInfo()
    this.owner = user.username
    let response = await API.graphql(
      graphqlOperation(listUserSettings, { owner: this.owner })
    )
    try {
      let userSetting = response.data.listUserSettings.items[0]
      if (userSetting) this.userSetting = userSetting
    } catch (error) {}
    loader.hide()
  },
  data: function() {
    return {
      owner: null,
      userSetting: {
        template: ''
      }
    }
  },
  methods: {
    async saveUserSettings() {
      let loader = this.$loading.show()

      let id = this.userSetting.id
      if (this.userSetting.template === '') this.userSetting.template = null

      if (id) {
        delete this.userSetting.owner
        let response = await API.graphql(
          graphqlOperation(updateUserSetting, { input: this.userSetting })
        )
      } else {
        let response = await API.graphql(
          graphqlOperation(createUserSetting, { input: this.userSetting })
        )
      }
      loader.hide()
    }
  }
}
</script>

<style>
</style>