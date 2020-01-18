import {PUT_QUESTIONS_INTO_STORE, UPDATE_ANSWER_IN_QUESTION} from "../actions/questions";


const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_QUESTIONS_INTO_STORE:
      return {
        ...state,
        byIds: action.questions,
        isLoaded: true,
      };
    case UPDATE_ANSWER_IN_QUESTION:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.qId]: {
            ...state.byIds[action.qId],
            [action.answer]: {
              // [...state.byIds[action.qId][action.answer].votes, action.userId]
            }
          }
        }
      }
    default:
      return state;
  }
};