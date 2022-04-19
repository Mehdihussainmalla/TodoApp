import store from "../store";
import types from "../types";

const { dispatch } = store;
export const addItem = (data)=>{
    console.log("adddddddd items in actionssss",data)
    dispatch({
        type:types.ADD_ITEM,
        payload:data
        
        
      })


}
export const deleteItem= id => {
    const Itemid = id
    // alert(Itemid)
    console.log("delete item",Itemid)
    dispatch({
        type:types.DELETE_ITEM,
        id: Itemid
    })
} 
export const updateItems =  (data)=>{
    console.log('update data',data)
    dispatch({
        type : types.UPDATE_LIST,
        //payload:data
    })
}

