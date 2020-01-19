import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuestionBox from "../components/QuestionBox";

export default {
  title: 'Question box',
  component: QuestionBox,
};

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

export const WithoutChildren = () => {
  return (
    <QuestionBox user={user} />
  );
};

export const WithChildren = () => {
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
