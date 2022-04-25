
import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from "./navigationStrings";
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignUp from '../Screens/SignUp/SignUp';

const AuthStack = (Stack) => {
  return (
      <> 
      <Stack.Navigator>
       <Stack.Screen name={navigationStrings.LOGINSCREEN}
       component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name={navigationStrings.SIGN_UP}
       component={SignUp} options={{headerShown:false}} />
     </Stack.Navigator>
      </>

  )
}

export default AuthStack