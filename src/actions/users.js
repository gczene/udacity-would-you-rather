import { _getUsers } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
export const PUT_USERS_INTO_STORE = 'PUT_USERS_INTO_STORE';

const handeResponse = (users) => ({
  type: PUT_USERS_INTO_STORE,
  users
})

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