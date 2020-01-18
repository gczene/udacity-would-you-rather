import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../components/NotFound';

import {BrowserRouter as Router} from "react-router-dom";
import { users } from '../utils/_DATA';

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

