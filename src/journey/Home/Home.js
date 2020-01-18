import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionCard from "./QuestionCard";

export default ({ questions }) => {

  const [filter, setFilter] = useState('unanswered')
  const tabChange = (key) => {
    setFilter(key);
  };

  return (
    <Container>
      <Row>
        <Col sm={{span: 8, offset: 2}}>
          <Tabs onSelect={tabChange} />
          {questions
            .filter((q) => q.answered === (filter === 'answered'))
            .map((question) => <QuestionCard key={question.id} question={question} />)}
        </Col>
      </Row>
      </Container>
  )
}