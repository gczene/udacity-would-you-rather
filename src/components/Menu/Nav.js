import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import styles from './menu.module.css';

export default ({ user, logout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={'/'}>Would you rather?</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="would-you-rather-menu" />
        <Navbar.Collapse id="would-you-rather-menu">
          <Nav className="mr-auto">
            <Nav.Link exact as={NavLink} to={''}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={'/add'}>New Question</Nav.Link>
            <Nav.Link as={NavLink} to={'/leaderboard'}>Leader Board</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <>
                <Navbar.Text className={styles.user}>
                  Hello {user.name}
                  <img className={styles.avatar} alt={`${user.name}'s avatar`} src={user.avatarURL} />
                </Navbar.Text>
                <Button onClick={logout}>Logout</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
