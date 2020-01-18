import React from 'react';
import { connect } from "react-redux";
import Question from "./Question";
import {saveAnswer} from "../../actions/questions";

const mapStateToProps = ({ questions, loggedInUser, users }, props) => {
  const { id } = props.match.params;
  const question = questions.byIds[id];
  const author = users.byIds[question.author];
  return {
    question,
    loggedInUser,
    author,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnswer: (data) => dispatch(saveAnswer(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);