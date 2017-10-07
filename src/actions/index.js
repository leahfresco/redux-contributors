import axios from "axios";
export const FETCH_CONTRIBUTORS = "FETCH_CONTRIBUTORS";

export const fetchReduxContributors = () => async dispatch => {
  const res = await axios.get(
    "https://api.github.com/repos/reactjs/redux/collaborators"
  );

  dispatch({ type: FETCH_CONTRIBUTORS, payload: res.data });
};
