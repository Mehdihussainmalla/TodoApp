import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (data) => {
    // console.log(data, 'stored my data')
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('myList', jsonValue)
        // console.log(data, 'store my data')
      return { jsonValue }
    } catch (e) {
        // saving error
        console.log("error rasied to store data")
    }
}
export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('myList')
        return value != null ? JSON.parse(value) : null;
        // console.log(jsonValue, '------data')
    } catch (e) {
        console.log(e)
    }
}


export async function setLogin(data) {

	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export async function getLogin() {
	try {
        const userData = await AsyncStorage.getItem('userData')
        return userData != null ? JSON.parse(userData) : null;
      } catch (e) {
        console.log("user_data get error")
      }
}


   export const removeData = async()=>{
    try {
        await AsyncStorage.removeItem('userData')
      
        
    } catch (error) {
        console.log('error occurred in remove items', error)
        
    }
}


