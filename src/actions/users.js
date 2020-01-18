import { _getUsers } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const PUT_USERS_INTO_STORE = 'PUT_USERS_INTO_STORE';
export const ADD_VOTE_TO_USER = 'ADD_VOTE_TO_USER';
export const RESET_USERS = 'RESET_USERS';

export const resetUsers = () => ({
  type: RESET_USERS,
});

const handeResponse = (users) => ({
  type: PUT_USERS_INTO_STORE,
  users
});

export const addVoteToUser = (authedUser, qid, answer) => ({
 type: ADD_VOTE_TO_USER,
 authedUser,
 qid,
 answer,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers()
      .then((users) => {
        dispatch(handeResponse(users));
        dispatch(hideLoading())
      });
  };
};