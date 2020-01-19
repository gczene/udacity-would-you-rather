import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from '../components/QuestionBox/Score';

export default {
  title: 'Score',
  component: Score,
};

export const ToStoryBook = () => {
  return (
    <Score createdQuestions={3} answeredQuestions={2} />
  );
};

ToStoryBook.story = {
  name: 'Score component',
};

