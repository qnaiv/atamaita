<template>
  <v-container class="mt-12">
    <v-row no-gutters>
      <v-col col="12" sm="8" offset-sm="2" md="6" offset-md="3" class="text-center">
        <p class="font-weight-thin display-1 primary--text" style="margin-left: -10px;">
          <v-icon color="primary" x-large>mdi-flash</v-icon>Atamaita
        </p>
        <v-form ref="form" class="pa-5">
          <v-text-field prepend-icon="mdi-account" v-model="name" label="Name" outlined required></v-text-field>
          <v-text-field
            prepend-icon="mdi-lock"
            type="password"
            v-model="password"
            label="Password"
            outlined
            required
          ></v-text-field>
          <v-btn block x-large outlined color="primary" class="mr-4" @click="signin">ログイン</v-btn>
          {{error}}
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  methods: {
    signin: async function() {
      let loader = this.$loading.show()
      try {
        await Auth.signIn(this.name, this.password)
        loader.hide()
        this.$router.push('/')
      } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
          this.error =
            'ユーザの確認が完了していません。メールをご確認ください。'
          // The error happens if the user didn't finish the confirmation step when signing up
          // In this case you need to resend the code and confirm the user
          // About how to resend the code and confirm the user, please check the signUp part
        } else if (err.code === 'PasswordResetRequiredException') {
          this.error = 'パスワードをリセットしてください。'
          // The error happens when the password is reset in the Cognito console
          // In this case you need to call forgotPassword to reset the password
          // Please check the Forgot Password part.
        } else if (err.code === 'NotAuthorizedException') {
          this.error = 'パスワードが違うか、ユーザが存在しません。'
          // The error happens when the incorrect password is provided
        } else if (err.code === 'UserNotFoundException') {
          this.error = 'パスワードが違うか、ユーザが存在しません。'
          // The error happens when the supplied username/email does not exist in the Cognito user pool
        } else {
          console.log(err)
        }
        loader.hide()
      }
    }
  },
  data: function() {
    return {
      name: '',
      password: '',
      error: ''
    }
  }
}
</script>

<style>
</style>