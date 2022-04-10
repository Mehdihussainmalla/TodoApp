import store from "../Store";
import types from "../types";

const { dispatch } = store;
export const addItem = (addItem)=>{
    console.log("adddddddd items in actionssss",addItem)
    dispatch({
        type:types.ADD_ITEM,
        payload:addItem
    })


}