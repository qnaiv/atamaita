<template>
  <amplify-authenticator :authConfig="authConfig" />
</template>

<script>
export default {
data: function(){
    return{
        authConfig: {
            signUpConfig: {
                hiddenDefaults: ["phone_number"]
            }
        }
    }
}
}
</script>

<style>

</style>