import { LOGIN_USER } from '../actions/loggedinUser';

const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    default:
      return state;
  }
};