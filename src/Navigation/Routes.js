import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux' 
const Stack = createNativeStackNavigator();


const Routes = () => {
  const UserData = useSelector(data => data.auth.isLogin);
  
  console.log(UserData,"UserDataaaaaa")
  return (
  <NavigationContainer>

      {/* {UserData? MainStack(Stack) : AuthStack(Stack)} */}
      { MainStack(Stack) }
     {/* { AuthStack(Stack)} */}
  </NavigationContainer>

     
  
  )
}

export default Routes