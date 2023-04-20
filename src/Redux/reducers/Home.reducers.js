import { POST_DATA_LOADING, POST_DATA } from "../types";

const initialState = {
  posts_data_loading: false,
  posts_data: [],
};

const homeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case POST_DATA_LOADING:
      return {
        ...state,
        posts_data_loading: action.payload,
      };
    case POST_DATA:
      return {
        ...state,
        posts_data: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
