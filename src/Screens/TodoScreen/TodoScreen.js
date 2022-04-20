import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import actions from '../../Redux/actions'
import navigationStrings from '../../navigation/navigationStrings';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import { styles } from './style';
import { storeData } from '../../utils/utils';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';



const TodoScreen = ({ navigation,route}) => {

    const allData=route?.params?.paramData

    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const ageRegex = /^100|[1-9]?\d$/;
    const rollnoRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const addressRegex = /^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
    const phonenumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [rollNo, setRollno] = useState('');
    const [address, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
   
   const userId= Math.floor(Math.random()*1000)
   
    useEffect(()=>{

        if (allData)
        {
            setName(allData?.name)
            setAdress(allData?.address)
            setAge(allData?.age)
            setRollno(allData?.rollNo)
            setPhoneNumber(allData.phoneNumber)
        }
    },[allData])

    // const handleAddTask = () => {
        let data=[{name,address,rollNo,age,phoneNumber}]
        
        const AddData =()=>{
            console.log('data through async')
            storeData(data)
    
        if (name === '') {
            console.log('please enter name')
        }
        else if (!nameRegex.test(name)) {
            console.log ("please enter correct name")
        }
        else if (age === '') {
            console.log('please enter age')
        }
        else if (!ageRegex.test(age)) {
            console.log("please enter correct age")
        }
        else if (rollNo === '') {
            console.log('please enter roll no')
        }
        else if (rollnoRegex.test(rollNo)) {
            console.log('please enter correct roll number')

        }
        else if (address === '') {
            console.log("please enter your address")
        }
        else if (!addressRegex.test(address)) {
            console.log("please enter correct address")
        }
        else if (phoneNumber === '') {
            console.log("please enter your phone number")
        }
        else if (!phonenumberRegex.test(phoneNumber)) {
            console.log('Invalid Phone Number')
        }
        else {
            const userData = [{
                userId:userId,

                name: name,
                phoneNumber: phoneNumber,
                address: address,
                age: age,
                rollNo: rollNo
            }]
            console.log(userData,'user data through reduxxxx')
            actions.addItem(userData)
            navigation.navigate(navigationStrings.HOMESCREEN)

        }

    }
    return (




        <WrapperContainer>
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.adddetails}>Add Details</Text>
                </View>



                <TextInputComponent onChangeText={event => setName(event)}
                    placeholder={strings.ENTER_NAME}/>
                <TextInputComponent onChangeText={event => setAge(event)}
                    placeholder={strings.ENTER_AGE} />
                <TextInputComponent onChangeText={event => setRollno(event)}
                    placeholder={strings.ENTER_ROLL_NUMBER} />
                <TextInputComponent onChangeText={event => setAdress(event)}
                    placeholder={strings.ENTER_ADDRESS} />
                <TextInputComponent onChangeText={event => setPhoneNumber(event)}
                    placeholder={strings.ENTER_PHONE_NUMBER} />
                    
                <View style={styles.btnviews}>
                   
                   
                    <TouchableOpacity activeOpacity={0.7}
                     onPress={AddData}>

                        <View style={styles.addtaskview}>

                            <Text style={styles.addtaskbutton}>{strings.SUBMIT}</Text>

                        </View>
                    </TouchableOpacity>




                </View>
            </View>

            </WrapperContainer>

    )
}

export default TodoScreen

