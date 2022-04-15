import store from "../store";
import types from "../types";


const { dispatch } = store;

export const Login = ( data) =>{
    console.log('loginData in actions', data)
    dispatch({
        type: types.LOGIN,
        payload: data,
        
    });
}
export const Logout = () => {
    dispatch({
        type:types.LOGOUT ,
        //payload:data,
        
    });
}