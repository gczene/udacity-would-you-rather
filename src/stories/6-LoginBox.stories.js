import React from 'react';
import LoginBox from '../components/LoginBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { users } from '../utils/_DATA';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Login box',
  component: LoginBox,
};

export const LoginBoxExample = () => {

  return (
    <LoginBox users={users} onSubmit={action('submit')} />
  );
};

LoginBoxExample.story = {
  name: 'to Storybook',
};
