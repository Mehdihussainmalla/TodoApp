import { setLogin, getLogin, removeData } from "../../utils/utils";
import types from "../types";
const initialState = {
    userData: {},

};


const userStatus = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            console.log(action.payload, 'check login ');
            const data = action.payload
            console.log("reducer User login", data)
            setLogin(data)

            return {

                ...state.userData,
                userData: data

            };
        case types.LOGOUT:
            removeData() .then((res) => {
                console.log('user status', res)
                return { ...state.userData, userData: res }
                }
            )
            return { ...state.userData, userData: undefined }

        default:
            return { ...state };
    }
}

export default userStatus