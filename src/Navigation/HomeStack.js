import { View, Text } from 'react-native'
import React from 'react'
import  HomeScreen from '../Screens/HomeScreen'
import navigationStrings from './navigationStrings'
import TodoScreen from '../Screens/TodoScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
 
const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName={navigationStrings.HOMESCREEN}
      options={{headerShown: false}} >
          
           <Stack.Screen  name={navigationStrings.TODOSCREEN} 
          component={TodoScreen} options={{headerShown: false}} />
          <Stack.Screen  name={navigationStrings.HOMESCREEN} 
          component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default HomeStack