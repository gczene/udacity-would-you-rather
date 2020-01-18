import { PUT_VOTES_TO_STORE, ADD_VOTE } from '../actions/votes';

const initialState = {
  byIds: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        byIds: action.votes
      };
    default:
      return state;
  }
};