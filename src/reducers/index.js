import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducers from "./usersReducer";
const reducers = combineReducers({ posts: postsReducer, users: userReducers });
export default reducers;
