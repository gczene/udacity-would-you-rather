import {PUT_USERS_INTO_STORE} from "../actions/users";

const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_USERS_INTO_STORE:
      return {
        ...state,
        byIds: action.users,
        isLoaded: true
      }
    default:
    return state;
  }
};