import {PUT_QUESTIONS_INTO_STORE} from "../actions/questions";


const initialState = {
  byIds: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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