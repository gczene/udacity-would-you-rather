import React, { useState } from 'react';
import {Button, Card, Form} from "react-bootstrap";

export default ({ users, onSubmit = () => {} }) => {
  const userArr = Object.keys(users)
    .map((id) => users[id]);

  const [selectedUser, selectUser] = useState(userArr[0]);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(selectedUser);
  }

  return (
    <Card>
      <Card.Header className={'text-center'}>
        <h1 className={'title'}>Welcome to the Would You Rather App</h1>
        <p>Please sign in to continue</p>
      </Card.Header>
      <Card.Body className={'text-center'}>
        <Form onSubmit={submit}>
          <Form.Group controlId="sign-in">
            <Form.Label><h2 className={'text-success'}>Select user</h2></Form.Label>
            <Form.Control as="select" onChange={(e) => selectUser(users[e.target.value])}>
              {userArr.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button variant={'success'} type={'submit'}>Sign in</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};