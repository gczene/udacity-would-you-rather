import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Question from '../../components/QuestionBox/Question';
import QuestionBox from '../../components/QuestionBox';
import Result from '../../components/QuestionBox/Result';

export default ({ author, loggedInUser, question, saveAnswer, vote }) => {
  const isAnswered = !!loggedInUser.answers[question.id];

  const submitHandler = (val) => {
    saveAnswer({
      authedUser: loggedInUser.id,
      qid: question.id,
      answer: val
    })
  }

  return (
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <QuestionBox user={author}>
            {!isAnswered && <Question onSubmit={submitHandler} question={question} />}
            {isAnswered && <Result question={question} user={loggedInUser} vote={vote} />}
          </QuestionBox>
        </Col>
      </Row>
    </Container>
  )
}