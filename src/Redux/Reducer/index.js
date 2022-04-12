import { combineReducers } from "redux";
import types from "../types";
import auth from './auth';
import items from "./items";

export default appReducer = combineReducers({
  auth,
  items,
});

