import React from 'react';
import { Link } from "react-router-dom";
import styles from './teaser.module.css';
import { Button } from 'react-bootstrap';

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

const isTempId = (id) => {
  return /^temp_/.test(id);
}

export default ({ question }) => {
  return (
    <div className={styles.container}>
      <p><b>Would you rather</b></p>
      <p>
        ...{getShortText(question.optionOne, 25)}...
      </p>
      <p>
        {
          !isTempId(question.id) &&
          <Link className={'btn btn-outline-success btn-block'} to={`/questions/${question.id}`}>View Poll</Link>
        }
        {
          isTempId(question.id) &&
          <Button disabled variant={'outline-secondary'} block>Saving...</Button>
        }
      </p>
    </div>
  );
};
