import { SIGNUP ,LOGIN} from "../../config/urls";
import { apiPost, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store;

export const saveUserData = ( data) =>{
    console.log('loginData in actions', data)
    dispatch({
        type: types.LOGIN,
        payload: data,
        
    });
    
}
export const Logout = () => {
    dispatch({
        type:types.LOGOUT ,

     
        
    });
}


export const login = (data, headers = {}) => {
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data, headers)
        .then(res => {
          setUserData(res.data).then(suc => {
            saveUserData(res.data);
            resolve(res);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
export  function signUp(data){
  console.log("signUp", data)
    apiPost(SIGNUP,data)
}


