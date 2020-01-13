import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu'
import {BrowserRouter as Router} from "react-router-dom";

export default {
  title: 'Menu',
  // component: Menu,
}

export const LoggedInMenu = () => {
  const user = {
    name: 'John Doe',
    avatarURL: '/images/user-1.jpg'
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

