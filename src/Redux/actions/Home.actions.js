import { homeServices } from "../services/Home.services";
import { POST_DATA_LOADING, POST_DATA } from "../types";

const getPosts = (searchInput) => {
  return async (dispatch) => {
    try {
      dispatch({ type: POST_DATA_LOADING, payload: true });
      const res = await homeServices.getPostsData(searchInput);
      dispatch({ type: POST_DATA, payload: res });

      dispatch({ type: POST_DATA_LOADING, payload: false });
      return res;
    } catch (e) {
      console.log(e);
      dispatch({ type: POST_DATA_LOADING, payload: false });
    }
  };
};

const getSearchData = (data) => {
  return (dispatch) => {
    dispatch({ type: POST_DATA, payload: data });
  };
};

export const homeActions = {
  getPosts,
  getSearchData,
};
