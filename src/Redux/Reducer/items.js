import types from "../types";
const initial_Data= {
    list: [],
};
export default (state=initial_Data, action)=>{
    switch (action.type) {
        case types.ADD_ITEM:
            console.log(action.payload,"adddddddditeeemsssss in reducer")
            const {id,data}=action.payload;
            
            
                return{
                list:[
                    ...state.list,
                    {
                        id:id,
                        name:data.name,
                        age : data.age,
                        rollNo : data.rollNo,
                        address : data.address,
                        phoneNo:data.phoneNumber
                    }
                ]
            
                // return{
                //     ...state,
                //     list:[...state.list, { id:id,

                //     } ,action.payload]
                // }
      };




            case types.DELETE_ITEM:
                const filteredList = state.list.filter(
                    (item) => item.id !== action.id,
                  );

                  return{
                      list:filteredList,
                    //   ...state,list:filteredList
                  }
            
    
        default:
            return {...state}
    }
}