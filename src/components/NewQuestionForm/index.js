import React, { useState } from 'react';
import { Form, Button, Card } from "react-bootstrap";

export default ({ onSubmit = () => {}, authedUser }) => {

  const [ optionOne, setOptionOne ] = useState('');
  const [ optionTwo, setOptionTwo ] = useState('');
  const [ validated, setValidated ] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setValidated(true);
    const isValid = optionOne.trim() && optionTwo.trim();
    if (isValid) {
      onSubmit({ optionOne, optionTwo, authedUser })
    }
  };

  return (
    <Card>
      <Card.Header className={'text-center'}>Create new question</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Card.Title>Would you rather...</Card.Title>
          <Form.Group controlId="questionOne">
            <Form.Control required type="text" value={optionOne} name={'optionOne'} onChange={(e) => setOptionOne(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              Required!
            </Form.Control.Feedback>
          </Form.Group>
          <Card.Title className={'font-weight-bold text-center'}>OR</Card.Title>
          <Form.Group controlId="questionTwo">
            <Form.Control required type="text" value={optionTwo} name={'optionTwo'} onChange={(e) => setOptionTwo(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              Required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};