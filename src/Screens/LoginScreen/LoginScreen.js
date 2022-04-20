
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import strings, { changeLanguage } from '../../constants/lang';
import actions from '../../Redux/actions'
import styles from './style'
import RNRestart from 'react-native-restart'
import Modal from 'react-native-modal'
import BtnComp from '../../Components/BtnComp';
import imagePath from '../../constants/imagePath';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import WrapperContainer from '../../Components/WrapperContainer';
import { Login} from '../../Redux/actions/auth';



const LoginScreen = () => {
  const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
  const passWrdRegz = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [email, setemail] = useState();


  const [password, setPassword] = useState('');

  const [isModalvisible, setModalVisible] = useState(false);

  const handleModal = () => setModalVisible(() => !isModalvisible);

  useEffect(()=>{
    GoogleSignin.configure();
  },[])

  //.............google login in ......................//
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
     console.log('user info', userInfo)
     const email=userInfo.user.email;
     const id=userInfo.user.id;
     const data={email,id}
     Login(data);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('errorr occurred during google sign in',error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('errorr occurred during google sign in',error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('errorr occurred during google sign in',error)
      } else {
        // some other error happened
        console.log('errorr occurred during google sign in',error)
      }
    }
  };
  

  //................fb login .........................//


  const fbLogin = (resCallBack) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
        result => {
            console.log("FB_LOGIN_RESULT =====>", result);
            if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
                resCallBack({ message: "email is required" })
            }
            if (result.isCancelled) {
                console.log("error")
            } else {
                const infoResquest = new GraphRequest(
                    '/me?fields = email, name, picture',
                    null,
                    resCallBack
                );
                new GraphRequestManager().addRequest(infoResquest).start()
            }
        },
        function (error) {
            console.log("login failed with error", error)
        }
    )
}

const onFbLogin = async () => {
    try {
        await fbLogin(resInfoCallBack)
    } catch (error) {
        console.log("error", error)
    }
}

const resInfoCallBack = async (error, result) => {
    if (error) {
        console.log("Login Error", error)
    } else {
        const userData = result;
        console.log(userData)
        Login(userData);
        
    }
}
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
    <WrapperContainer>
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
          <Text style={styles.loginbtn}>{strings.CHANGE_LANGUAGE}</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={onFbLogin}
          activeOpacity={0.4} style={styles.fbview}>
          <Image style={styles.fblogo} source={imagePath.facebook_icon} />
          <Text style={styles.fbtext}>{strings.LOGIN_WITH_FACEBOOK}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={googleLogin}  activeOpacity={0.4} style={styles.googleview}>
          <Image  style={styles.googlelogo} source={imagePath.google_icon} />
       <Text style={styles.googletext}>{strings.LOGIN_WITH_GOOGLE}</Text>
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
      </View>

      </WrapperContainer>
  )
}

export default LoginScreen
