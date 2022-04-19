import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/navigation/Routes'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import types from './src/Redux/types';
import { getData, getLogin } from './src/utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from './src/constants/lang';
import store from './src/Redux/store';
import actions from './src/Redux/actions'





const App = () => {

  
  useEffect(() => {
    getLanguage();

    getLogin().then((res)=>{
      // console.log("get login",res)
      Actions.Login(res)
    })



   
    getData().then((res) => {
      // console.log("store data", res)
      if(!!res){
        actions.addItem(res)
      }
    })
  }, [])

  const   getLanguage= async () => {
    try {
      const lng = await AsyncStorage.getItem('language')
      console.log("Lnguage changed", lng)
      if (!!lng) {
        strings.setLanguage(lng)
      } else {
        strings.setLanguage('en')
      }
    } catch (error) {
      console.log("error occurred in ")
    }
  }
  

  
  return (
     
    <Provider store={store} >
     
   <SafeAreaProvider>
       <Routes/>
   </SafeAreaProvider>
     
    </Provider>


  )
}

export default App

