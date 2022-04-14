import store from "../store";
import types from "../types";

const { dispatch } = store;
export const addItem = (data)=>{
    console.log("adddddddd items in actionssss",addItem)
    dispatch({
        type:types.ADD_ITEM,
        payload:{
        id:Math.floor(Math.random()*1000),
        data:data
        
        
     } })


}
export const deleteItem= id => {
    console.log("delete item",deleteItem)
    dispatch({
        type:types.DELETE_ITEM,
        id
    })
} 
export const editData =  (itemId, itemvalue)=>{
    console.log('update data',editData )
    dispatch({
        type : types.EDIT_ITEM,
        payload:{itemId,itemvalue}
    })
}

