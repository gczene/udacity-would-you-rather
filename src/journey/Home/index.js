import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  const user = state.loggedInUser;
  const questions = Object.keys(state.questions.byIds)
    .map((id) => {
      return {
        ...state.questions.byIds[id],
        answered: !!user.answers[id]
      }
    });
  return {
    questions,
  };
};

export default connect(mapStateToProps)(Home);