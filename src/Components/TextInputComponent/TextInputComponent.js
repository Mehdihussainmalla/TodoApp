import { StyleSheet, Text, View,TextInput,SafeAreaView} from 'react-native'
import React from 'react'
import {moderateVerticalScale} from 'react-native-size-matters';

const TextInputComponent = ({
    placeholder='',
    // keyboardType='',
    onChangeText=''
}) => {
    
  return (
      <SafeAreaView style={{marginTop:10}}>
           <TextInput onChangeText={onChangeText} placeholder={placeholder}
        //    keyboardType={keyboardType}

            style={styles.input}


            />
      </SafeAreaView>
   
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
input:{
    borderRadius: 10,
    height: 35,
    width: '100%',
   // backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    //marginHorizontal:27,
    marginVertical:5,
    padding: moderateVerticalScale(8),
   
}

})