import React from 'react';
import Tabs from '../components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {action} from "@storybook/addon-actions";


export default {
  title: 'Question Tabs',
  component: Tabs,
};

export const TabsExample = () => {
  return (
    <Tabs onSelect={action('select')} />
  );
};

TabsExample.story = {
  name: 'to Storybook',
};
