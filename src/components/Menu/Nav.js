import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import styles from './menu.module.css';

export default ({user}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={'/'}>Would you rather?</Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={''}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={'/add'}>New Question</Nav.Link>
            <Nav.Link as={NavLink} to={'/leader-board'}>Leader Board</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <Navbar.Text className={styles.user}>
                Hello {user.name}
                <img className={styles.avatar} src={user.avatarURL} />
              </Navbar.Text>

            )}
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};