import store from "../store";
import types from "../types";


const { dispatch } = store;

export const Login = ( loginData) =>{
    console.log('loginData in actions', loginData)
    dispatch({
        type: types.LOGIN,
        payload: loginData,
    });
}
export const Logout = (logoutdata) => {
    //console.log('logout data',logoutdata)
    dispatch({
        type:types.LOGOUT ,
        //payload:logoutdata,
        
    });
}