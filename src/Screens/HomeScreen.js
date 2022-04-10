import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Actions from '../Redux/Actions'
import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../Navigation/navigationStrings'
import { useSelector } from 'react-redux'
import BtnComp from '../Components/BtnComp'


const HomeScreen = () => {
    const list = useSelector(data => data.items.list)
    const listData = list
    //  const some = {listData}
    console.log(listData, "list")
    const navigation = useNavigation();

    // const list = [
    // {id:1,title:'Name :'},
    // {id:2,title:'Age :'},
    // {id:3,title:'Roll No :'},
    // {id:4,title:'Address :'},
    // {id:5,title:'Phone No :'},]

    return (
        <SafeAreaView>
            <View style={styles.homeview}>
                <View style={styles.taskheader}>
                    <Text style={styles.task}>TASKS</Text>
                </View>
                {/* <View style={styles.btnWarpper} >
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)} activeOpacity={0.9}style={styles.additem}>
                    <Text style={styles.additembtn}> Add Task </Text>
                </TouchableOpacity> 
                 <TouchableOpacity><Text>Add more</Text></TouchableOpacity>
                </View> */}



                {/* {true? <Text> one </Text> : <Text>one</Text> } */}

                <View style={styles.listview}>
                    {list.map((item, index) => {
                        console.log('itemssssss', item)
                        return (
                            <View key={index} style={{ marginHorizontal: 15, paddingTop: 20 }}>
                                <Text>Address: {item.address} <Text style={{color:'red'}} >Edit</Text> </Text> 
                                <Text>Age: {item.age}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.phoneNumber}</Text>
                                <Text>{item.rollNo}</Text>

                            </View>
                        )
                    })}
                </View>
                <View style={styles.btnWarpper} >
                    <View style={{backgroundColor : !list.length > 0 ? 'red': 'grey'} } >
                    <BtnComp
                    listLength={list.length}
                    
                        title="Add Task"
                        onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                    />
                    </View>
                    <View   style={{backgroundColor : list.length > 0 ? 'red': 'grey'} } >
                    <BtnComp
                      
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

const styles = StyleSheet.create({

    homeview: {

        // justifyContent:'center',
        height: '100%',
        width: '100%',
        //padding: 10,
        //backgroundColor: 'skyblue',

    },
    taskheader: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: "100%",
        backgroundColor: 'green'
    },

    task: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffff',
        fontWeight: '500'
    },
    listview: {
        padding: 25,
        //backgroundColor:'lightgrey',
        width: '100%'
    },
    additem: {
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        // marginHorizontal: 75,
        // height: '14%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    additembtn: {
        fontSize: 25,
        color: '#ffff',
        fontWeight: '400'
    },
    btnWarpper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5,
    }
})