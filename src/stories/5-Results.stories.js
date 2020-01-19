import React from 'react';
import Result from '../components/QuestionBox/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.module.css';

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
  const user = {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '/images/user-2.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  };

  return (
    <Result user={user} question={question} vote={vote} />
  );
};

ResultExample.story = {
  name: 'to Storybook',
};
