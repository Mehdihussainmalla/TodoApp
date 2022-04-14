import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, } from 'react-redux'
import BtnComp from '../../../Components/BtnComp'
import imagePath from '../../../constants/imagePath'
import { deleteItem } from '../../../Redux/actions/items';
import navigationStrings from '../../../Navigation/navigationStrings'
import { styles } from './style'
// import actions from '../../../Redux/actions'




const HomeScreen = () => {
    const list = useSelector(data => data.items.list)
    const listData = list
    //  const some = {listData}
    console.log(listData, "list")
    const navigation = useNavigation();

    const edit =(data,index)=>{
        console.log(data,index,)
    }



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
                                
                                <View  style={styles.iconview}>

                                <TouchableOpacity onPress={()=>deleteItem(item.id)}
                                    style={styles.detelestyle}>
                                                        <Image style={styles.deleteicon}
                                        source={imagePath.delet_icon}></Image>


                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.updatestyle}>
                                                        <Image style={styles.updateicon}
                                        source={imagePath.update_icon}></Image>
                                </TouchableOpacity>
                                </View>

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
