import {PUT_QUESTIONS_INTO_STORE} from "../actions/questions";


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
    default:
      return state;
  }
};