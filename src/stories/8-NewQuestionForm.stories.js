import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewQuestionForm from '../components/NewQuestionForm';
import { action } from "@storybook/addon-actions";

export default {
  title: 'New Question Form',
  component: NewQuestionForm,
};

export const ToStoryBook = () => {
  return (
    <NewQuestionForm authedUser={'user-X'} onSubmit={action('Submit')} />
  );
};

ToStoryBook.story = {
  name: 'form',
};

