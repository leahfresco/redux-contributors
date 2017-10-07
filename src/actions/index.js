import axios from "axios";
export const FETCH_CONTRIBUTORS = "FETCH_CONTRIBUTORS";

export const fetchReduxContributors = page => {
  const res = axios.get(
    `https://api.github.com/repos/reactjs/redux/contributors?page=${page}&per_page=100`
  );

  return {
    type: FETCH_CONTRIBUTORS,
    payload: res
  };
};
