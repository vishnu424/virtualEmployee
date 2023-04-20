import { combineReducers } from "redux";
import homeReducer from "./Home.reducers";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
