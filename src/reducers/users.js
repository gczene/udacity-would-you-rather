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
      return {
        ...state,
        byIds: action.users,
        isLoaded: true
      }
    default:
      return state;
  }
};