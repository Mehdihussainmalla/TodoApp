import Store from '../Store'
import types from "../types";


const { dispatch } = Store;

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
        // payload:data,
        
    });
}