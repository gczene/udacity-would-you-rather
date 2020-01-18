import React from 'react';
import {Alert, Card} from "react-bootstrap";

import { FaExclamationTriangle } from 'react-icons/fa';

export default () => {
  return (
    <Card>
      <Card.Header>
        Not Found
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Alert variant={'danger'}>
            <FaExclamationTriangle style={{fontSize: '34px'}} />
            It seems the required URL can not be found!
          </Alert>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};