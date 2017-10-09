import { FETCH_CONTRIBUTORS, UPVOTE_CONTRIBUTOR } from "../actions/index";

import { Map, toJS } from "immutable";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CONTRIBUTORS:
      let new_contributors = [];
      action.payload.data.map(contributor =>
        new_contributors.push(
          Map(contributor)
            .set("votes", 0)
            .toJS()
        )
      );
      return state.concat(new_contributors);
    case UPVOTE_CONTRIBUTOR:
      console.log(state);
      return state.map(contributor => {
        if (contributor.login == action.login) {
          return Object.assign({}, contributor, {
            votes: contributor.votes + 1
          });
        }
        return contributor;
      });
    default:
      return state;
  }
}
