import React, { useState } from 'react';
import styles from './question.module.css';
import { Button, Form } from "react-bootstrap";

export default ({ question, onSubmit = () => {} }) => {

  const [ value, setValue ] = useState(question.optionOne.text);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={submit}>
      <h1 className={styles.title}>Would you rather...</h1>
      <Form.Check
        onChange={() => setValue(question.optionOne.text)}
        type={'radio'}
        id={'optionOne'}
        label={question.optionOne.text}
        name={'answer'}
        checked={value === question.optionOne.text}
      />
      <Form.Check
        onChange={() => setValue(question.optionTwo.text)}
        type={'radio'}
        id={'optionTwo'}
        label={question.optionTwo.text}
        name={'answer'}
        checked={value === question.optionTwo.text}
      />
      <div>
        <Button type={'submit'} block variant={'success'}>Submit</Button>
      </div>
    </Form>
  );
};