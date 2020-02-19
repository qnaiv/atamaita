import { Auth } from 'aws-amplify'

export default async ({ route,redirect }) => {
  const userInfo = await Auth.currentUserInfo()
  console.log(userInfo);
  
  if (!userInfo && route.path != '/signin') {
    redirect('/signin')
  }
}