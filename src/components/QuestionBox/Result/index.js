import React from 'react';
import styles from './Result.module.css';
import Card from './Card';

export default ({ question, user }) => {

  const { optionOne, optionTwo } = question;

  const allVotes = optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <div>
      <h1 className={styles.title}>Result</h1>
      <Card userId={user.id} votes={question.optionOne.votes} allVotes={allVotes} text={optionOne.text} />
      <Card userId={user.id} votes={question.optionTwo.votes} allVotes={allVotes} text={optionTwo.text} />
    </div>
  );
};