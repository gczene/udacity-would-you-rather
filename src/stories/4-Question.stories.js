import React from 'react';
import Question from '../components/QuestionBox/Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.module.css';
import { action } from "@storybook/addon-actions";
import { questions } from '../utils/_DATA';

export default {
  title: 'Question',
  component: Question,
};

export const QuestionExample = () => {
  const question = questions[Object.keys(questions)[0]];
  return (
    <Question question={question} onSubmit={action('submit')} />
  );
};

QuestionExample.story = {
  name: 'to Storybook',
};
