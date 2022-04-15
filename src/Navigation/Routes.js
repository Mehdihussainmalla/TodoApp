import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux' 
const Stack = createNativeStackNavigator();


const Routes = () => {
  const userData = useSelector((state)=> state.auth.userData);
  
  console.log(userData,"UserDataaaaaa")
  return (
  <NavigationContainer>

      {userData != null? MainStack(Stack) : AuthStack(Stack)}
      {/* { MainStack(Stack) } */}
     {/* { AuthStack(Stack)} */}
  </NavigationContainer>

     
  
  )
}

export default Routes