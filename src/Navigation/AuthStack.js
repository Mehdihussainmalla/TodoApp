
import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from "./navigationStrings";
import LoginScreen from '../Screens/LoginScreen/LoginScreen';

const AuthStack = (Stack) => {
  return (
      <> 
      <Stack.Navigator >
       <Stack.Screen name={navigationStrings.LOGINSCREEN}
       component={LoginScreen} options={{headerShown:false}} />
     </Stack.Navigator>
      </>

  )
}

export default AuthStack