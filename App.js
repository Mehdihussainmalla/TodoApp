import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/Navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import types from './src/Redux/types';
import { getData, getLogin } from './src/utils/utils';
import actions from './src/Redux/actions';




const App = () => {

  
  useEffect(() => {
    getLogin().then((res)=>{
      // console.log("get login",res)
      actions.Login(res)
    })

   
    getData().then((res) => {
      // console.log("store data", res)
      if(!!res){
        actions.addItem(res)
      }
    })
  }, [])
  

  
  return (
     
    <Provider store={store} >
     
   <SafeAreaProvider>
       <Routes/>
   </SafeAreaProvider>
     
    </Provider>


  )
}

export default App

