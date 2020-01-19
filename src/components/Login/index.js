import React, { useEffect } from 'react';
import { connect } from "react-redux";
import LoginBox from '../LoginBox';
import { fetchUsers } from "../../actions/users";
import { login } from '../../actions/loggedinUser';
import { Col, Container, Row } from "react-bootstrap";

const Login = ({ isLoading, users, fetchUsers, submit }) => {
  useEffect(() => {
    if (isLoading) {
      fetchUsers();
    }
  }, [fetchUsers, isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col sm={{span: 8, offset: 2}}>
          <LoginBox users={users} onSubmit={submit} />
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    submit: (user) => dispatch(login(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoaded === false,
    users: state.users.byIds,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
