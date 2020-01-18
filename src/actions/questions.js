import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { putVotesToStore } from '../actions/votes';
import { addVoteToVotes } from "./votes";
import { addVoteToUser } from "./users";

export const PUT_QUESTIONS_INTO_STORE = 'PUT_QUESTIONS_INTO_STORE';

const putQuestionsToStore = (questions) => ({
  type: PUT_QUESTIONS_INTO_STORE,
  questions,
});

export const saveAnswer = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(addVoteToVotes(authedUser, qid, answer));
    dispatch(addVoteToUser(authedUser, qid, answer));

    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then((resp) => {
        dispatch(hideLoading());
      });
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
        dispatch(putVotesToStore(getVotesFromQuestions(questions)))
        dispatch(putQuestionsToStore(questions));
      });
  };
};