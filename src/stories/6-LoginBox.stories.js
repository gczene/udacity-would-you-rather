import React from 'react';
import LoginBox from '../components/LoginBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { action } from "@storybook/addon-actions";

export default {
  title: 'Login box',
  component: LoginBox,
};

const users = {
  user1: {
    id: 'user1',
    name: 'Sarah Edo',
    avatarURL: '/images/user-2.jpg',
  },
  user2: {
    id: 'user2',
    name: 'Sarah Edo 2',
    avatarURL: '/images/user-2.jpg',
  }
}

export const LoginBoxExample = () => {
  return (
    <LoginBox users={users} onSubmit={action('submit')} />
  );
};

LoginBoxExample.story = {
  name: 'to Storybook',
};
