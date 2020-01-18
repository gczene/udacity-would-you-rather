import { RESET_LOGGEDIN_USER, LOGIN_USER } from '../actions/loggedinUser';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_LOGGEDIN_USER:
      return initialState;
    case LOGIN_USER:
      return action.user.id;
    default:
      return state;
  }
};