import React from 'react';
import QuestionBox from '../../components/QuestionBox'
import Question from '../../components/QuestionBox/Question';
import { Col, Container, Row } from "react-bootstrap";

export default ({ author, loggedInUser, question, saveAnswer }) => {
  const isAnswered = !!loggedInUser.answers[question.id];

  const submitHandler = (val) => {
    saveAnswer({
      authedUser: loggedInUser.id,
      qid: question.id,
      answer: val
    })
  }
  console.log(question);
  return (
    <Container>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <QuestionBox user={author}>
            {!isAnswered && <Question onSubmit={submitHandler} question={question} />}
          </QuestionBox>
        </Col>
      </Row>
    </Container>
  )
}