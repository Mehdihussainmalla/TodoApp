import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import actions from '../../Redux/actions';
import navigationStrings from '../../navigation/navigationStrings'


const SignUp = ({navigation}) => {
   

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [deviceToken, setDeviceToken] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [password, setPassword] = useState('');

    const onSignup = async() => {

        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: phoneCode,
            country_code: countryCode,
            device_token: deviceToken,
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password
        }
         console.log(apiData)
        try {
            const res = await actions.signUp(apiData)
            console.log("signup api is......", res)
            navigation.navigate(navigationStrings.LOGINSCREEN)
            alert("User signup sucessfully !")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <TextInputComponent placeholder={strings.ENTER_NAME}
                    onChangeText={firstName => setFirstName(firstName)} />
                <TextInputComponent placeholder={strings.LAST_NAME}
                    onChangeText={lastName => setLastName(lastName)} />
                <TextInputComponent placeholder={strings.EMAIL}
                    onChangeText={event => setEmail(event)} />
                <TextInputComponent placeholder={strings.PHONE}
                    onChangeText={event => setPhone(event)} />
                <TextInputComponent placeholder={strings.PHONE_CODE}
                    onChangeText={event => setPhoneCode(event)} />
                <TextInputComponent placeholder={strings.COUNTRY_CODE}
                    onChangeText={event => setCountryCode(event)} />
                <TextInputComponent placeholder={strings.DEVICE_TOKEN}
                    onChangeText={deviceToken => setDeviceToken(deviceToken)} />
                <TextInputComponent placeholder={strings.DEVICE_TYPE}
                    onChangeText={deviceType => setDeviceType(deviceType)} />
                <TextInputComponent placeholder={strings.PASSWORD}
                    onChangeText={event => setPassword(event)} />


                <TouchableOpacity onPress={onSignup} style={styles.btnview}>
                    <Text style={styles.signup}>{strings.SIGN_UP}</Text>
                </TouchableOpacity>
            </View>
        </WrapperContainer>
    );
};
export default SignUp;
