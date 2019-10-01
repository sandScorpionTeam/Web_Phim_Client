import { combineReducers } from "redux";
import films from "./films";
import auth from "./auth";

const rootReducer = combineReducers({
  films, auth
});

export default rootReducer;
