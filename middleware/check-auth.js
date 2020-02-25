import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default async ({ route,redirect,store }) => {
  const userInfo = await Auth.currentUserInfo()
  
  if(userInfo){
    store.commit("loginuser/updateName", userInfo.username)
  }
  if (!userInfo && route.path != '/signin') {
    redirect('/signin')
  }

  AmplifyEventBus.$on('authState', (info) => {
    if (info === 'signedIn') {
      console.log("/");
      
      redirect('/')
    } else if (info === 'signedOut') {
      console.log("/signin");

      redirect('/signin')
    }
  })
}