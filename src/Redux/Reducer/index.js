import { combineReducers } from "redux";
import types from "../types";
import auth from './auth';
import items from "./items";

const appReducer = combineReducers({
  auth,
  items,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;