import { resetUsers } from './users';
import { resetVotes } from './votes';
import { resetQuestions } from './questions';

export const LOGIN_USER = 'LOGIN_USER';
export const RESET_LOGGEDIN_USER = 'RESET_LOGGEDIN_USER';

const resetLoggedInUser = () => ({
  type: RESET_LOGGEDIN_USER,
});

export const logout = () => (dispatch) => {
  dispatch(resetLoggedInUser());
  dispatch(resetUsers());
  dispatch(resetVotes());
  dispatch(resetQuestions());
};

export const login = (user) => ({
  type: LOGIN_USER,
  user,
});
