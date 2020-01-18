import React from 'react';
import {Badge, Card, ProgressBar} from "react-bootstrap";
import styles from "./Result.module.css";

export default ({ allVotes, votes, userId, text }) => {
  const percentage = Math.round(votes.length / allVotes * 100);
  return (
    <Card className={'mb-3'}>
      <Card.Body>
        {votes.includes(userId) && <Badge className={styles.badge} variant="success">Voted</Badge>}
        <p>{text}</p>
        <ProgressBar
          variant={'success'}
          now={percentage}
          label={`${percentage}%`}
        />
        <p>{votes.length} out of {allVotes} votes</p>
      </Card.Body>
    </Card>

  );
};