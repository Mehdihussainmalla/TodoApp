import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/Navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import types from './src/Redux/types';
import { getData } from './src/utils/utils';


const App = () => {
  useEffect(() => {
    getData().then((res) => {
      console.log("store data", res)
      if (!!res) {
        dispatch({
          type:types.ADD_ITEM,
          payload: res
        })
      }
    })
  }, [])

  const {dispatch}= store;
  return (
     
    <Provider store={store} >
     
   <SafeAreaProvider>
       <Routes/>
   </SafeAreaProvider>
     
    </Provider>


  )
}

export default App

