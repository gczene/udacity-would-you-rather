import React from 'react';
import { Link } from "react-router-dom";
import styles from './teaser.module.css';

const getShortText = (str, max = 15) => {
  const arr = str.split(' ');
  return arr.reduce((acc, curr) => {
    const allLength = acc.length;
    if (allLength + curr.length <= max) {
      return acc + ` ${curr}`;
    }
    return acc;
  }, '');
};

export default ({ question }) => {
  return (
    <div className={styles.container}>
      <p><b>Would you rather</b></p>
      <p>
        ...{getShortText(question.optionOne, 25)}...
      </p>
      <p>
        <Link className={'btn btn-outline-success btn-block'} to={`/question/${question.id}`}>View Poll</Link>
      </p>
    </div>
  );
};