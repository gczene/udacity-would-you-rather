import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Teaser from '../components/QuestionBox/Teaser';
import { questions } from '../utils/_DATA';
import { BrowserRouter as Router } from 'react-router-dom';

const question = questions[Object.keys(questions)[0]];

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
