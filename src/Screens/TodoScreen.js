import { StyleSheet, Text, View, SafeAreaView ,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import TextInputComponent from '../Components/TextInputComponent/TextInputComponent'
import Actions from '../Redux/Actions';
import navigationStrings from '../Navigation/navigationStrings';


const TodoScreen = ({navigation}) => {
const nameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const ageRegex=/^100|[1-9]?\d$/;
const rollnoRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const addressRegex=/^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
const phonenumberRegex=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    const [name , setName]=useState('');
    const [age, setAge]=useState('');
    const [rollNo , setRollno]=useState('');
    const [address , setAdress]=useState('');
    const [phoneNumber , setPhoneNumber]=useState('');

    const handleAddTask =()=>{
        if(name==='')
        {
            console.log('please enter name')
        }
        else if(!nameRegex.test(name))
        {
            console.log("please enter correct name")
        }
        else if (age==='')
        {
            console.log('please enter age')
        }
        else if (!ageRegex.test(age))
        {
         console.log("please enter correct age")
        }
else if (rollNo==='')
{
    console.log('please enter roll no')
}
else if (rollnoRegex.test(rollNo))
{
    console.log('please enter correct roll number')

}
else if(address==='')
{
    console.log("please enter your address")
}
else if(!addressRegex.test(address))
{
    console.log("please enter correct address")
}
else if (phoneNumber==='')
{
    console.log("please enter your phone number")
}
else if (!phonenumberRegex.test(phoneNumber))
{
    console.log('Invalid Phone Number')
}
else {
    const userData = {name:name,
        phoneNumber:phoneNumber,
        address:address,
        age:age,
        rollNo:rollNo
    }
    console.log(userData)
    Actions.addItem(userData)
    navigation.navigate(navigationStrings.HOMESCREEN)

}

    }
    return (


        
    
        <SafeAreaView >
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.adddetails}>Add Details</Text>
                </View>



                <TextInputComponent onChangeText={event=>setName(event)} 
                placeholder='Enter Name' />
                <TextInputComponent  onChangeText={event=>setAge(event)}
                placeholder='Enter Age' />
                <TextInputComponent onChangeText={event=>setRollno(event)}
                 placeholder='Enter Roll No' />
                <TextInputComponent onChangeText={event=>setAdress(event)}
                 placeholder='Enter Address' />
                <TextInputComponent  onChangeText={event=>setPhoneNumber(event)}
                placeholder='Enter Phone Number' />
                 <TouchableOpacity activeOpacity={0.7} onPress={handleAddTask}>
                 <View style={styles.addtaskview}>
                <Text style={styles.addtaskbutton}>Submit</Text>
                </View>
                </TouchableOpacity>
           </View>
          
        </SafeAreaView>

    )
}

export default TodoScreen

const styles = StyleSheet.create({
    container:
    {
        // justifyContent:'center',
        height: '100%',
        width: '100%',
       // padding: 10,
       // backgroundColor: 'skyblue',

    },
    heading: {
    // borderRadius:10,
    justifyContent:'center',
        alignItems: 'center',
        height: 40,
        width: "100%",
        backgroundColor: 'green'
    },
    adddetails: {
        textAlign:'center',
        fontSize: 20,
        color: '#ffff',
        fontWeight:'500'
    },
    addtaskview:{
        
        marginHorizontal:25,
                 borderRadius:10,
                justifyContent:'center',
                alignItems: 'center',
                height: 40,
                width: "38%",
                marginTop:20,
                backgroundColor: 'green',
                

    },
    addtaskbutton:{
        backgroundColor:'green',
         fontSize:25,
        color:'#fff',
        fontWeight:'400'
}

})