import React from 'react';
import { connect } from "react-redux";
import Question from "./Question";
import {saveAnswer} from "../../actions/questions";

const mapStateToProps = ({ questions, loggedInUser, users, votes }, props) => {
  const { id } = props.match.params;
  const question = questions.byIds[id];
  if (!question) {
    return {
      notFound: true,
    }
  }
  const author = users.byIds[question.author];
  return {
    question,
    user: users.byIds[loggedInUser],
    author,
    notFound: false,
    vote: votes.byIds[id]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnswer: (data) => dispatch(saveAnswer(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);