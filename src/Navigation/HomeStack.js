import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from './navigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../Screens/TodoScreen/TodoScreen'
import HomeScreen from '../Screens/Home/HomeScreen/HomeScreen'

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