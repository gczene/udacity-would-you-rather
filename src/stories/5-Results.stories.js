import React from 'react';
import Result from '../components/QuestionBox/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.module.css';
import { users } from '../utils/_DATA';

export default {
  title: 'Result',
  component: Result,
};

export const ResultExample = () => {
  const question = {
    id: 'user-1',
    author: 'A user',
    timestamp: 1467166872634,
    optionOne: 'question 1',
    optionTwo: 'question 2',
  };
  const vote = {
    optionOne: ['user-1'],
    optionTwo: ['user-2', 'user-3'],
  }
  const user = users.sarahedo;

  return (
    <Result user={user} question={question} vote={vote} />
  );
};

ResultExample.story = {
  name: 'to Storybook',
};
