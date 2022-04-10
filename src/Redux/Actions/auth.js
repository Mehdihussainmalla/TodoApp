import store from "../Store";
import types from "../types";

const { dispatch } = store;

export const Login =( loginData)=>{
    console.log('loginData in actions', loginData)
    dispatch({
        type: types.LOGIN,
        payload: loginData,
    });
}