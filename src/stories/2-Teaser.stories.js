import React from 'react';
import Teaser from '../components/QuestionBox/Teaser';
import { BrowserRouter as Router } from 'react-router-dom';

const question = {
  id: 'user-1',
  author: 'A user',
  timestamp: 1467166872634,
  optionOne: 'question 1',
  optionTwo: 'question 2',
};

export default {
  title: 'Teaser',
  component: Teaser,
};

export const TeaserExample = () => {
  return (
    <Router>
      <Teaser question={question} />
    </Router>
  );
};

TeaserExample.story = {
  name: 'to Storybook',
};
