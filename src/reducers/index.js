import contributorsReducer from "./contributorsReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

export default combineReducers({
  contributors: contributorsReducer,
  filter: filterReducer
});
