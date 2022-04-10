import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';

const App = () => {
  return (
     
    <Provider store={Store} >
     
   <SafeAreaProvider>
       <Routes/>
   </SafeAreaProvider>
     
    </Provider>


  )
}

export default App

