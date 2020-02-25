<template>
  <amplify-authenticator :authConfig="authConfig" />
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  layout: 'unauthenticated',
  async created() {
    // サインイン済みだったらホームにリダイレクトする
    const userInfo = await Auth.currentUserInfo()
    if (userInfo) {
      this.$router.push('/')
    }
  },
  data: function() {
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: ['phone_number']
        }
      }
    }
  }
}
</script>

<style scoped>
div {
  padding: 0;
  min-width: 100%;
  box-shadown: none;
  -webkit-box-shadow: none;
}
</style>