import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BtnComp = ({title , onPress,disable}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.btnStyle} disabled={disable}>
          <Text style={styles.btnText} >{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnStyle:{
        paddingHorizontal:10,
        paddingVertical:5,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
        // backgroundColor:'grey',
        alignContent:'center',
        height:42,
    },
    btnText:{
        fontSize:15,
        textAlign:'center',
        alignSelf:'center',
        color:'white'
    }
})

export default BtnComp