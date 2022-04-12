import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, } from 'react-redux'
import BtnComp from '../../../Components/BtnComp'
import imagePath from '../../../constants/imagePath'
import { deleteItem } from '../../../Redux/actions/items';
import navigationStrings from '../../../Navigation/navigationStrings'
import { styles } from './style'
const HomeScreen = () => {
    const list = useSelector(data => data.items.list)
    const listData = list
    //  const some = {listData}
    console.log(listData, "list")
    const navigation = useNavigation();



    return (
        <SafeAreaView>
            <View style={styles.homeview}>
                <View style={styles.taskheader}>
                    <Text style={styles.task}>TASKS</Text>
                </View>

                <View style={styles.listview}>
                    {list.map((item, id) => {
                        console.log('itemssssss', item)
                        return (
                            <View key={id} style={styles.dataview}>

                                <TouchableOpacity onPress={()=>deleteItem(item.id)}
                                    style={styles.detelestyle}>
                                                        <Image style={styles.deleteicon}
                                        source={imagePath.delet_icon}></Image>


                                </TouchableOpacity>
                                <Text>Name : {item.name}</Text>
                                <Text>Age: {item.age}</Text>
                                <Text>Roll No: {item.rollNo}</Text>
                                <Text>Address: {item.address}</Text>
                                <Text>PhoneNumber: {item.phoneNumber}</Text>


                            </View>
                        )
                    })}
                </View>
                <View style={styles.btnWarpper} >
                    <View style={{ backgroundColor: list.length > 0 ? 'grey' : 'red' }} >
                        <BtnComp
                         //disable={true} 
                            listLength={list.length} 

                            title="Add Task"
                            onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                        />
                    </View>
                    <View style={{ backgroundColor: !list.length > 0 ? 'grey' : 'red' }} >
                        <BtnComp
                               // disable={false}
                            title="Add More"
                            onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                        />
                    </View>

                </View>
            </View>
        </SafeAreaView >
    )
}

export default HomeScreen

// const styles = StyleSheet.create({

//     homeview: {

//         // justifyContent:'center',
//         height: '100%',
//         width: '100%',
//         //padding: 10,
//         //backgroundColor: 'skyblue',

//     },
//     taskheader: {

//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 40,
//         width: "100%",
//         backgroundColor: 'green'
//     },

//     task: {
//         textAlign: 'center',
//         fontSize: 20,
//         color: '#ffff',
//         fontWeight: '500'
//     },
//     listview: {
//         padding: 25,
//         //backgroundColor:'lightgrey',
//         width: '100%'
//     },
//     additem: {
//         marginTop: 25,
//         backgroundColor: 'blue',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 5,
//         // marginHorizontal: 75,
//         // height: '14%',
//         backgroundColor: 'green',
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center'
//     },
//     additembtn: {
//         fontSize: 25,
//         color: '#ffff',
//         fontWeight: '400'
//     },
//     btnWarpper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginHorizontal: 10,
//         marginTop: 5,
//     },
//     dataview: {
//         borderWidth: 0.5,
//         padding: 10,
//         marginVertical: 8
//     },
//     deleteicon: {
//         height: 30,
//         width: 20,
//         // marginHorizontal: 50,
//         marginRight: 10
//     },
//     detelestyle: {
//         flexDirection: 'row',

//     },
// })