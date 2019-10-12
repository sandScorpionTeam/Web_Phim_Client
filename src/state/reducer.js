import { combineReducers } from "redux";
import movies from "./movies";
import pager from "./pager";
import auth from "./auth";

const rootReducer = combineReducers({
  movies, pager, auth
});

export default rootReducer;
