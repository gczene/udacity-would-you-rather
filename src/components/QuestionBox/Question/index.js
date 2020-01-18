import React, { useState } from 'react';
import styles from './question.module.css';
import { Button, Form } from "react-bootstrap";

export default ({ question, onSubmit = () => {} }) => {

  const [ value, setValue ] = useState('optionOne');

  const submit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={submit}>
      <h1 className={styles.title}>Would you rather...</h1>
      <Form.Check
        onChange={() => setValue('optionOne')}
        type={'radio'}
        id={'optionOne'}
        label={question.optionOne}
        name={'answer'}
        checked={value === 'optionOne'}
      />
      <Form.Check
        onChange={() => setValue('optionTwo')}
        type={'radio'}
        id={'optionTwo'}
        label={question.optionTwo}
        name={'answer'}
        checked={value === 'optionTwo'}
      />
      <div>
        <Button type={'submit'} block variant={'success'}>Submit</Button>
      </div>
    </Form>
  );
};