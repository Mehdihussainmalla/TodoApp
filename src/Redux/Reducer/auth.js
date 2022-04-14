import types from "../types";
const initialState = {
    isLogin: false,
    isLogout : false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            console.log(action.payload, 'reducerrrrrrrrr');
            return {
                ...state,
                isLogin: true
            };
            case types .LOGOUT:
                console.log(action.payload," check logout from reducerrr");
                return{
                    ...state, 
                   isLogout:true
                }
            
        default:
            return {...state};
    }
}