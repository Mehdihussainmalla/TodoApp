import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, } from 'react-redux'
import BtnComp from '../../../Components/BtnComp'
import navigationStrings from '../../../Navigation/navigationStrings'
import { styles } from './style'
import imagePath from '../../../constants/imagePath'
import { deleteItem } from '../../../Redux/actions/items'
import actions from '../../../Redux/actions'




const HomeScreen = () => {
    const list = useSelector(data => data?.items?.list)
    //  const some = {listData}
    console.log(list, "list")
    const navigation = useNavigation();


    const handlerEditDetails = (e, item) => {

        console.log(item.userId, "items areeeeee")
        navigation.navigate(navigationStrings.TODOSCREEN)



    }



    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.homeview}>
                    <View style={styles.taskheader}>
                        <Text style={styles.task}>TASKS</Text>
                    </View>
                    <View style={styles.listview}>

                        {list?.map((item, index) => (
                            <View key={index} style={styles.dataview}>

                                <Text>Name :{item.name}</Text>
                                <Text>Age: {item.age}</Text>
                                <Text>Roll No: {item.rollNo}</Text>
                                <Text>Address: {item.address}</Text>
                                <Text>PhoneNumber:{item.phoneNumber}</Text>
                                <View style={styles.iconview}>

                                    <TouchableOpacity onPress={() => deleteItem(item.id)}
                                        style={styles.detelestyle}>
                                        <Image style={styles.deleteicon}
                                            source={imagePath.delet_icon}></Image>


                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={(e) => handlerEditDetails(e, item)}
                                        style={styles.updatestyle}>
                                        <Image style={styles.updateicon}
                                            source={imagePath.update_icon}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )

                        )}

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
                             
                                title="Add More"
                                onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                            />
                        </View>


                    </View>
                    <TouchableOpacity onPress={actions.Logout()} style={styles.logoutview}>
                        <BtnComp title='logout' />
                    </TouchableOpacity>
            
               </View>
                    
            </ScrollView>

        </SafeAreaView >
    )
}

export default HomeScreen
