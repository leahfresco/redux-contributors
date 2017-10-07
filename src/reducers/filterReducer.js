import { SET_FILTER } from "../actions/index";

export default function(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.term;
    default:
      return state;
  }
}
