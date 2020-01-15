import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import questions from "./questions";;

export default combineReducers({
  loggedInUser,
  users,
  loadingBar: loadingBarReducer,
  questions,
});