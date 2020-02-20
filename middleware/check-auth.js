import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default async ({ route,redirect }) => {
  const userInfo = await Auth.currentUserInfo()
  console.log(userInfo);
  
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