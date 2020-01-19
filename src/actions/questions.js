import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { putVotesToStore } from '../actions/votes';
import { addVoteToVotes, addVote, updateVoteAfterSave } from "./votes";
import { addVoteToUser } from "./users";

export const PUT_QUESTIONS_INTO_STORE = 'PUT_QUESTIONS_INTO_STORE';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const UPDATE_QUESTION_AFTER_SAVING = 'UPDATE_QUESTION_AFTER_SAVING'

const updateQuestionAfterSave = (oldId, newId, timestamp) => ({
  type: UPDATE_QUESTION_AFTER_SAVING,
  oldId,
  newId,
  timestamp,
});

export const resetQuestions = () => ({
  type: RESET_QUESTIONS,
});

const addNewQuestion = (question) => ({
  type: ADD_NEW_QUESTION,
  question,
});

export const saveQuestion = ({optionOne, optionTwo, authedUser}) => (dispatch) => {
  const id = 'temp_' + Math.random().toString(36);
  const question = {
    id,
    author: authedUser,
    timestamp: Date.now(),
    optionOne,
    optionTwo
  };
  const vote = {
    optionOne: [],
    optionTwo: []
  };
  dispatch(showLoading());
  dispatch(addNewQuestion(question));
  dispatch(addVote(vote, id));
  return _saveQuestion({
    optionOneText: optionOne,
    optionTwoText: optionTwo,
    author: authedUser,
  })
    .then((resp) => {
      dispatch(hideLoading());
      dispatch(updateQuestionAfterSave(
        id,
        resp.id,
        resp.timestamp,
      ));
      dispatch(updateVoteAfterSave(
        id,
        resp.id,
      ));
    });

};


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