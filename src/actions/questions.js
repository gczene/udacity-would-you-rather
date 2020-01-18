import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { putVotesToStore } from '../actions/votes';
import {addVote} from "./votes";

export const PUT_QUESTIONS_INTO_STORE = 'PUT_QUESTIONS_INTO_STORE';

const putQuestionsToStore = (questions) => ({
  type: PUT_QUESTIONS_INTO_STORE,
  questions,
});

export const saveAnswer = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(addVote(authedUser, qid, answer))

    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then((resp) => {
        dispatch(hideLoading());
        console.log('----')
        console.log(resp);
      })
  }
};

const getVotesFromQuestions = (questions) => {
  const votes = {};
  Object.keys(questions).forEach((id) => {
    votes[id] = {
      optionOne: [ ...questions[id].optionOne.votes ],
      optionTwo: [ ...questions[id].optionTwo.votes ],
    };
  });
  return votes;
}

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions()
      .then((questions) => {
        dispatch(hideLoading());
        console.log(questions);
        dispatch(putQuestionsToStore(questions));
        dispatch(putVotesToStore(getVotesFromQuestions(questions)))
      });
  };
};