import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/Nav'
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: 'Menu',
}

export const LoggedInMenu = () => {
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
    <Router>
      <Menu user={user} />
    </Router>
    );
};

LoggedInMenu.story = {
  name: 'Logged in',
  component: Menu
};


export const LoggedOutInMenu = () => {
  return (
    <Router>
      <Menu />
    </Router>
  );
};

LoggedOutInMenu.story = {
  name: 'Logged out',
  component: Menu
};

