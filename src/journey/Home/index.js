import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  const user = state.users.byIds[state.loggedInUser];
  const questions = Object.keys(state.questions.byIds)
    .map((id) => {
      return {
        ...state.questions.byIds[id],
        answered: !!user.answers[id]
      }
    })
    .sort((a, b) => (b.timestamp - a.timestamp));
  return {
    questions,
  };
};

export default connect(mapStateToProps)(Home);
