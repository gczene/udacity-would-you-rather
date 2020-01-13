import React from 'react';
import Result from '../components/QuestionBox/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.module.css';
import { questions, users } from '../utils/_DATA';

export default {
  title: 'Result',
  component: Result,
};

export const ResultExample = () => {
  const question = questions['6ni6ok3ym7mf1p33lnez'];
  const user = users.sarahedo;

  return (
    <Result user={user} question={question} />
  );
};

ResultExample.story = {
  name: 'to Storybook',
};
