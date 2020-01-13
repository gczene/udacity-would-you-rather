import React from 'react';
import {Nav} from "react-bootstrap";

export default ({onSelect}) => {
  return (
    <Nav onSelect={onSelect} variant="tabs" fill defaultActiveKey="unanswered">
      <Nav.Item>
        <Nav.Link eventKey="unanswered">Unanswered questions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="answered">Answered questions</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};