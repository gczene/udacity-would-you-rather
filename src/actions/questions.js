import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const PUT_QUESTIONS_INTO_STORE = 'PUT_QUESTIONS_INTO_STORE';
export const UPDATE_ANSWER_IN_QUESTION = 'UPDATE_ANSWER_IN_QUESTION';

const handleResponse = (questions) => ({
  type: PUT_QUESTIONS_INTO_STORE,
  questions,
});

export const updateAnswerInQuestion = (userId, qId, answer) => ({
  type: UPDATE_ANSWER_IN_QUESTION,
  userId,
  qId,
  answer,
});

export const saveAnswer = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(updateAnswerInQuestion(authedUser, qid, answer))
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then((resp) => {
        dispatch(hideLoading());
        console.log('----')
        console.log(resp);
      })
  }
};

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