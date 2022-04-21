import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, findNodeHandle, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, } from 'react-redux'
import BtnComp from '../../../Components/BtnComp'
import navigationStrings from '../../../navigation/navigationStrings'
import { styles } from './style'
import imagePath from '../../../constants/imagePath'
import { deleteItem } from '../../../Redux/actions/items'
import actions from '../../../Redux/actions'
import WrapperContainer from '../../../Components/WrapperContainer'
import { Logout, logoutGoogle } from '../../../Redux/actions/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import strings from '../../../constants/lang'




const HomeScreen = () => {
    const userData = useSelector((state) => state.auth.userData);
    const list = useSelector(data => data?.items?.list)
    //  const some = {listData}
    console.log(list, "list")
    const navigation = useNavigation();

    // const HandleLogout = () => {
    //    // alert('logout sucessfully finally')
    //     actions.Logout();
    // }


    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            Logout();
        } catch (error) {
            console.log(error)

        }
    }



    const handlerEditDetails = (e, item) => {

        console.log(item.userId, "items areeeeee")
        navigation.navigate(navigationStrings.TODOSCREEN)
    }
    
        return (
        <WrapperContainer>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.homeview}>
                        <View style={styles.taskheader}>
                            <Text style={styles.task}>{strings.TASKS}</Text>
                        </View>
                        <View style={styles.emaildata}>
                        <Text  style={styles.emailtext}>{userData.email}</Text>
                        </View>
                        <View style={styles.listview}>

                            {list?.map((item, index) => (
                                <View key={index} style={styles.dataview}>
                                    <Text>{strings.NAME} :{item.name}</Text>
                                    <Text>{strings.AGE} : {item.age}</Text>
                                    <Text>{strings.ROLL_NUMBER}: {item.rollNo}</Text>
                                    <Text>{strings.ADDRESS}: {item.address}</Text>
                                    <Text>{strings.PHONE_NUMBER}:{item.phoneNumber}</Text>
                                    {/* <Text>{item.userId}</Text> */}
                                    <View style={styles.iconview}>

                                        <TouchableOpacity onPress={() => deleteItem(item.userId)}
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

                                    title={strings.ADD_TASK}
                                    onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                                />
                            </View>
                            <View style={{ backgroundColor: !list.length > 0 ? 'grey' : 'red' }} >
                                <BtnComp

                                    title={strings.ADD_MORE}
                                    onPress={() => navigation.navigate(navigationStrings.TODOSCREEN)}
                                />
                            </View>


                        </View>
                        <TouchableOpacity
                            // onPress={HandleLogout} 
                            style={styles.logoutview}>
                            <BtnComp title={strings.LOGOUT}
                                onPress={signOut}
                            // onPress={()=>alert('hey')}
                            />
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </SafeAreaView >
        </WrapperContainer>
    )
}

export default HomeScreen
