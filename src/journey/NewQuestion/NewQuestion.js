import React from 'react';
import NewQuestionForm from "../../components/NewQuestionForm";
import {Col, Container, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";


export default ({ submit, authedUser }) => {
  const history = useHistory();

  const submitHandler = function () {
    history.push('/');
    submit(...arguments);
  };

  return (
    <Container>
      <Row>
        <Col sm={{span: 8, offset: 2}}>
          <NewQuestionForm onSubmit={submitHandler} authedUser={authedUser} />
        </Col>
      </Row>
    </Container>
  );
};