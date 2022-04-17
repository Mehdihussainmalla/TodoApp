import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/Navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import types from './src/Redux/types';
import { getData, getLogin } from './src/utils/utils';
import Store from './src/Redux/Store'
import Actions from './src/Redux/Actions'





const App = () => {

  
  useEffect(() => {
    getLogin().then((res)=>{
      // console.log("get login",res)
      Actions.Login(res)
    })

   
    getData().then((res) => {
      // console.log("store data", res)
      if(!!res){
        Actions.addItem(res)
      }
    })
  }, [])
  

  
  return (
     
    <Provider store={Store} >
     
   <SafeAreaProvider>
       <Routes/>
   </SafeAreaProvider>
     
    </Provider>


  )
}

export default App

