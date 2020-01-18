import { LOG_OUT, LOGIN_USER } from '../actions/loggedinUser';

const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return null;
    case LOGIN_USER:
      return action.user.id;
    default:
      return state;
  }
};