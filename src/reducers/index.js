import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import { loadingBarReducer } from 'react-redux-loading';

import users from './users';
export default combineReducers({
  loggedInUser,
  users,
  loadingBar: loadingBarReducer,
});