import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/Nav'
import {BrowserRouter as Router} from "react-router-dom";
import { users } from '../utils/_DATA';

export default {
  title: 'Menu',
}

export const LoggedInMenu = () => {
  const user = users['johndoe'];
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

