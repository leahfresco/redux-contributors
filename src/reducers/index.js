import { combineReducers } from "redux";
import contributorsReducer from "./contributorsReducer";

export default combineReducers({
  contributors: contributorsReducer
});
