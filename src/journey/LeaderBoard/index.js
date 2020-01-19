import React from "react";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";

const mapStateToProps = (state) => {
  const users = Object.keys(state.users.byIds)
    .map((userId) => {
      return {
        ...state.users.byIds[userId],
        answeredQuestions: Object.keys(state.votes.byIds)
          .filter((id) => {
            return state.votes.byIds[id].optionOne.includes(userId)
              || state.votes.byIds[id].optionTwo.includes(userId);
          }).length,
        createdQuestions: Object.keys(state.questions.byIds)
          .filter((questionId) => {
            return state.questions.byIds[questionId].author === userId
          }).length

      }
    }).sort((a, b) => (
      (b.createdQuestions + b.answeredQuestions) - (a.createdQuestions + a.answeredQuestions)
    ))
  return {
    users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
