import {PUT_USERS_INTO_STORE, ADD_VOTE_TO_USER, RESET_USERS} from "../actions/users";

const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_USERS:
      return initialState;
    case ADD_VOTE_TO_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [authedUser]: {
            ...state.byIds[authedUser],
            answers: {
              ...state.byIds[authedUser].answers,
              [qid]: answer
            }
          }
        }
      }
    case PUT_USERS_INTO_STORE:
      const users = Object.keys(action.users)
        .reduce((acc, id) => {
          const user = {
            ...action.users[id]
          };
          delete user.questions;
          return {
            ...acc,
            [id]: { ...user },
          }
        }, {});

      return {
        ...state,
        byIds: users,
        isLoaded: true
      }
    default:
      return state;
  }
};
