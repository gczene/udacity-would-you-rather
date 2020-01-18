import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../components/NotFound';

export default {
  title: 'Not Found',
  component: NotFound,
};


export const ToStoryBook = () => {
  return (
    <NotFound />
  );
};

ToStoryBook.story = {
  name: 'component',
  component: NotFound
};

