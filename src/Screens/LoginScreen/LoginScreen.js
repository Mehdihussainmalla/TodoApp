
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import actions from '../../Redux/actions';
import styles from './style'


const LoginScreen = () => {
    const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
    const passWrdRegz = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   
    const [email, setemail] = useState();
    
  
    const [password, setPassword] = useState('');

   

    const handleLogin =()=>{

      if (email==="")
      {
          console.log('please enter email')
      }

      else if(!emailRegex.test(email))

      {
          console.log('Invalid email')
      }

      else if (password==="")

      {
          console.log('please enter password')
      }

      else if(password.length<6)
       {
          console.log('please enter correct password')
      }

      else if (!passWrdRegz.test(password))
      {
          console.log('please enter valid password')
      }
      else
      { 
    
        actions.Login({email,password})  
      }


    }
    
  return (
   <SafeAreaView>
<View style={styles.loginview}>

<TextInputComponent onChangeText={event=>setemail(event)} 
placeholder='Enter your email'
 />
<TextInputComponent onChangeText={event=>setPassword(event)} 
placeholder='enter password'
/>

<TouchableOpacity activeOpacity={0.4} onPress={handleLogin} style={styles.btnview}>
    <Text style={styles.loginbtn}>Login</Text>
</TouchableOpacity>
</View>

   </SafeAreaView>
  )
}

export default LoginScreen

// const styles = StyleSheet.create({

//     loginview:{
//         justifyContent:'center',
//          height: '100%', 
//          width: '100%',
//           padding: 16,
//           backgroundColor:'lightgrey'
//     },
//     btnview:{
//         backgroundColor:'blue',
//         borderRadius:10,
//        // marginHorizontal:35,
//         justifyContent:'center',
//         alignContent:'center',
//     marginVertical:15,
//     marginLeft:45,
//     width:'65%'
// },
// loginbtn:{
//     fontSize:25,
//     margin:5,
//     color:'#fff',
//      fontWeight:'500',
//      textAlign:'center'}
// })