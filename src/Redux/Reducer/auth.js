import types from "../types";
const initialState = {
    //   listData: [],
    isLogin: false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            console.log(action.payload, 'reducerrrrrrrrr');
            return {
                ...state,
                isLogin: true
            };
            
        default:
            return {...state};
    }
}