import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import store from '../Redux/store';
import types from '../Redux/types';

 const {dispatch} = store;

export async function getHeaders() {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      return {
        authorization: `${userData.auth_token}`,
      };
    }
    return {};
  }

export const storeData = async (data) => {
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('myList', jsonValue)
        return { jsonValue }
    } catch (e) {
        console.log("error rasied to store data")
    }
}
export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('myList')
        return value != null ? JSON.parse(value) : null;
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


export const removeData = async () => {
    try {
        await AsyncStorage.removeItem('userData')


    } catch (error) {
        console.log('error occurred in remove items', error)

    }
}

export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {
console.log("api hit",endPoint)
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					clearLoginUser();	
					
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}



export function setItem(key, data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key).then(data => {
			resolve(JSON.parse(data));
		});
	});
}

export function removeItem(key) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
	return AsyncStorage.clear();
}

export function setUserData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export function setLoginUser(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('loginUser', data);
}

export function setDefaultSelectedLanguage(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('defaultLanguage', data);
}


export function setClientInfo(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('clientInfo', data);
}
export function saveShortCodeData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('saveShortCode', data);
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then(data => {
			resolve(JSON.parse(data));
		});
	});
}






export function setLanguage(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('language', data);
}

export async function getLanguage() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('language').then(data => {
			resolve(JSON.parse(data));
		});
	});
}


export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}

export async function clearLoginUser() {
	return AsyncStorage.removeItem('loginUser');
}
