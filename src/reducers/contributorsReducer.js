import { FETCH_CONTRIBUTORS, UPVOTE_CONTRIBUTOR } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CONTRIBUTORS:
      return state.concat(action.payload.data);
    case UPVOTE_CONTRIBUTOR:
      return state.map(contributor =>
                if (contributor.login !== action.login) {
                  return todo
                }
                 return Object.assign({},
                    contributor, {votes: contributor.votes+=1})
            );
    default:
      return state;
  }
}
