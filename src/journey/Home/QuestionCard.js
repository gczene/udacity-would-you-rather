import React from 'react';
import { connect } from 'react-redux';
import QuestionBox from '../../components/QuestionBox';
import Teaser from '../../components/QuestionBox/Teaser';

const mapStateToProps = (state, { question }) => {
  return {
    user: state.users.byIds[question.author]
  }
}
const Card = ({question, user}) => {
  return (
    <QuestionBox user={user}>
      <Teaser question={question} />
    </QuestionBox>
  )
}

export default connect(mapStateToProps)(Card);