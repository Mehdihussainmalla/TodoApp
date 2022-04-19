
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import strings, { changeLanguage } from '../../constants/lang';
import actions from '../../Redux/actions'
import styles from './style'
import RNRestart from 'react-native-restart'
import Modal from 'react-native-modal'
import BtnComp from '../../Components/BtnComp';
import imagePath from '../../constants/imagePath';


const LoginScreen = () => {
  const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
  const passWrdRegz = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [email, setemail] = useState();


  const [password, setPassword] = useState('');

  const [isModalvisible, setModalVisible] = useState();

  const handleModal = () => setModalVisible(() => !isModalvisible);


  const userData = {
    email: email,
    password: password
  }


  const onchangeLang = (key) => {
    changeLanguage(key);
    RNRestart.Restart();



  }

  const handleLogin = () => {

    if (email === "") {
      console.log('please enter email')
    }

    else if (!emailRegex.test(email)) {
      console.log('Invalid email')
    }

    else if (password === "") {
      console.log('please enter password')
    }

    else if (password.length < 6) {
      console.log('please enter correct password')
    }

    else if (!passWrdRegz.test(password)) {
      console.log('please enter valid password')
    }
    else {

      actions.Login([userData])
    }


  }

  return (
    <SafeAreaView>
      <View style={styles.loginview}>

        <TextInputComponent onChangeText={event => setemail(event)}
          placeholder={strings.ENTER_YOUR_EMAIL}
        />
        <TextInputComponent onChangeText={event => setPassword(event)}
          placeholder={strings.ENTER_PASSWORD}
        />

        <TouchableOpacity activeOpacity={0.4} onPress={handleLogin} style={styles.btnview}>
          <Text style={styles.loginbtn}>{strings.LOGIN}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleModal}
          style={styles.btnview}>
          <Text style={styles.loginbtn}>Change Language</Text>


        </TouchableOpacity>
        <Modal isVisible={isModalvisible}>

          <TouchableOpacity onPress={() => onchangeLang('fr')}>
            <View style={styles.frenchlang}>
              <Text style={styles.frenchtext}>{strings.FRENCH}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onchangeLang('en')}>
            <View style={styles.englishlang}>
              <Text style={styles.englishtext}>{strings.ENGLISH}</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => onchangeLang('ur')}>
            <View style={styles.englishlang}>
              <Text style={styles.englishtext}>{strings.URDU}</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.hidebtn}>
            <BtnComp title={strings.HIDE} onPress={handleModal} />
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity  activeOpacity={0.4} style={styles.fbview}>
          <Image  style={styles.fblogo} source={imagePath.facebook_icon} />
       <Text style={styles.fbtext}>{strings.LOGIN_WITH_FACEBOOK}</Text>
      </TouchableOpacity>

      <TouchableOpacity  activeOpacity={0.4} style={styles.googleview}>
          <Image  style={styles.googlelogo} source={imagePath.google_icon} />
       <Text style={styles.googletext}>login with goolge</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen
