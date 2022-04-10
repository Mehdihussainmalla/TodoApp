import types from "../types";
const initial_Data= {
    list: [],
};
export default (state=initial_Data, action)=>{
    switch (action.type) {
        case types.ADD_ITEM:
            console.log(action.payload,"adddddddditeeemsssss in reducer")
            {
                return{
                    ...state,
                    list:[...state.list, action.payload]
                }
            };
            
    
        default:
            return {...state}
    }
}