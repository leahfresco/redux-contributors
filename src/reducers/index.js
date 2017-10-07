import { combineReducers } from "redux";
import contributorsReducer from "./contributorsReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  contributors: contributorsReducer,
  filter: filterReducer
});
