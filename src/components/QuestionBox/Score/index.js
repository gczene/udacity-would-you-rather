import React from "react";
import styles from './Score.module.css';
import {Badge, Card, ListGroup} from "react-bootstrap";

export default ({ createdQuestions, answeredQuestions, position = 1}) => {
  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <Badge variant={'info'} className={styles.badge}>#{position}</Badge>
        <ListGroup variant={'flush'}>
          <ListGroup.Item>
            Answered questions: <span className={'float-right'}>{answeredQuestions}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            Created questions: <span className={'float-right'}>{createdQuestions}</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className={styles.scoreCard}>
        <Card className={'text-center'}>
          <Card.Header>Score</Card.Header>
          <Card.Body>
            <div className={styles.summaryScore}>
              {createdQuestions + answeredQuestions}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
