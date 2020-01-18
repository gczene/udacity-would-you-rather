import React from 'react';
import Question from '../components/QuestionBox/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.module.css';
import { action } from "@storybook/addon-actions";

const question = {
  id: 'user-1',
  author: 'A user',
  timestamp: 1467166872634,
  optionOne: 'question 1',
  optionTwo: 'question 2',
};

export default {
  title: 'Question',
  component: Question,
};

export const QuestionExample = () => {
  return (
    <Question question={question} onSubmit={action('submit')} />
  );
};

QuestionExample.story = {
  name: 'to Storybook',
};
