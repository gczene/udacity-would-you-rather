import React from 'react';
import styles from './Result.module.css';
import Card from './Card';

export default ({ question, user, vote }) => {

  const { optionOne, optionTwo } = question;

  const allVotes = vote.optionOne.length + vote.optionTwo.length;

  return (
    <div>
      <h1 className={styles.title}>Result</h1>
      <Card userId={user.id} votes={vote.optionOne} allVotes={allVotes} text={optionOne} />
      <Card userId={user.id} votes={vote.optionTwo} allVotes={allVotes} text={optionTwo} />
    </div>
  );
};