import types from "../types";
import { storeData } from "../../utils/utils";

const initial_Data = {
    list: [],
};
export default (state = initial_Data, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            let newArray = state.list.concat(action.payload)
            console.log(action.payload, "items concatenated")


            storeData(newArray).then((value) => {
                console.log('items are stored data', value)
            })
            return {

                ...state,
                list: newArray

            };




        case types.DELETE_ITEM:
            const dataId = action.payload
            console.log(dataId, "id in reducer")
            const filteredList = state.list.filter(
                (item) => item.id !== dataId,
            );
            storeData(filteredList)
            return {
                ...state,
                list: filteredList,
            };

       case types.UPDATE_LIST:
            let updateArray = [...state.list]




        default:
            return { ...state }
    }
}