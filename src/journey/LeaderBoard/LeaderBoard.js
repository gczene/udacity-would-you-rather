import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import QuestionBox from '../../components/QuestionBox';
import Score from '../../components/QuestionBox/Score';

export default ({ users }) => {
  return (
    <Container>
      <Row>
        <Col sm={{span: 8, offset: 2}}>
          {users.map((user, index) => (
            <QuestionBox key={user.id} user={user}>
              <Score
                position={index + 1}
                answeredQuestions={user.answeredQuestions}
                createdQuestions={user.createdQuestions}
              />
            </QuestionBox>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
