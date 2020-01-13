import React from 'react';
import {Card} from "react-bootstrap";
import styles from './questionBox.module.css';
export default ({ user, children }) => {
  return (
    <Card>
      <Card.Header>{user.name} asks</Card.Header>
      <Card.Body className={styles.body}>
        <div>
          <Card.Img className={styles.avatar} variant="left" src={user.avatarURL} />
        </div>
        <div className={styles.border}></div>
        <div className={styles.content}>
          {children}
        </div>
      </Card.Body>
    </Card>
  )
}