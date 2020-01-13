import React from 'react';
import { users } from '../utils/_DATA';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuestionBox from "../components/QuestionBox";
export default {
  title: 'Question box',
  component: QuestionBox,
};

export const WithoutChildren = () => {
  const user = users['johndoe'];
  return (
    <QuestionBox user={user} />
  );
};

export const WithChildren = () => {
  const user = users['johndoe'];
  return (
    <QuestionBox user={user}>
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
      With supporting text below as a natural lead-in to additional content.<br />
    </QuestionBox>
  );
};
