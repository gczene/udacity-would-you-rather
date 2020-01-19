import { PUT_VOTES_TO_STORE, ADD_VOTE, RESET_VOTES, ADD_NEW_VOTE, UPDATE_VOTE_AFTER_SAVING } from '../actions/votes';

const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VOTE_AFTER_SAVING:
      return {
        ...state,
        byIds: Object.keys(state.byIds)
          .reduce((acc, curr) => {
            if (curr === action.oldId) {
              return {
                ...acc,
                [action.newId]: {...state.byIds[curr]}
              }
            }
            return {
              ...acc,
              [curr]: {...state.byIds[curr]}
            }
          }, {})
      };
    case ADD_NEW_VOTE:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.id]: action.vote,
        }
      };

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
