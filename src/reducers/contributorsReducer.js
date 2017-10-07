import { FETCH_CONTRIBUTORS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CONTRIBUTORS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
