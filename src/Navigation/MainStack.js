import { View, Text } from 'react-native'
import React from 'react'
import HomeStack from './HomeStack'
import navigationStrings from './navigationStrings'
import HomeScreen from '../Screens/HomeScreen'


const MainStack = (Stack) => {
  return (
      <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
        options={{headerShown: false}}
      />
        {/* <HomeStack Stack={Stack} /> */}
      </Stack.Navigator>

  )
}

export default MainStack