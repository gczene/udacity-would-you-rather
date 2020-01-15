import { _getQuestions } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const PUT_QUESTIONS_INTO_STORE = 'PUT_QUESTIONS_INTO_STORE';

const handleResponse = (questions) => ({
  type: PUT_QUESTIONS_INTO_STORE,
  questions,
});

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions()
      .then((questions) => {
        dispatch(hideLoading());
        dispatch(handleResponse(questions));
      });
  };
};