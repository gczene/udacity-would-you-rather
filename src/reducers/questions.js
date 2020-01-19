import {
  PUT_QUESTIONS_INTO_STORE,
  RESET_QUESTIONS,
  ADD_NEW_QUESTION,
  UPDATE_QUESTION_AFTER_SAVING
} from "../actions/questions";

const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTION_AFTER_SAVING:
      return {
        ...state,
        byIds: Object.keys(state.byIds).reduce((acc, curr) => {
          if (curr === action.oldId) {
            return {
              ...acc,
              [action.newId]: {
                ...state.byIds[curr],
                id: action.newId,
                timestamp: action.timestamp,
              }
            }
          }
          return {
            ...acc,
            [curr]: state.byIds[curr]
          }
        }, {})
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.question.id]: action.question,
        }
      };
    case RESET_QUESTIONS:
      return initialState;
    case PUT_QUESTIONS_INTO_STORE:
      const byIds = {};
      Object.keys(action.questions)
        .forEach((id) => {
          byIds[id] = {
            ...action.questions[id],
            optionOne: action.questions[id].optionOne.text,
            optionTwo: action.questions[id].optionTwo.text,
          }
        });
      return {
        ...state,
        byIds,
        isLoaded: true,
      };
    default:
      return state;
  }
};