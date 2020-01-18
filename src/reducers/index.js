import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import questions from "./questions";
import votes from "./votes";

export default combineReducers({
  loggedInUser,
  loadingBar: loadingBarReducer,
  users,
  questions,
  votes,
});