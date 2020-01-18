import { PUT_VOTES_TO_STORE, ADD_VOTE, RESET_VOTES } from '../actions/votes';

const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_VOTES:
      return initialState;
    case ADD_VOTE:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.qid]: {
            ...state.byIds[action.qid],
            [action.answer]: [...state.byIds[action.qid][action.answer], action.authedUser]
          }
        }
      };
    case PUT_VOTES_TO_STORE:
      return {
        ...state,
        byIds: action.votes,
        isLoaded: true,
      };
    default:
      return state;
  }
};