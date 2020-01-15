import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.loggedInUser
  };
};

const Component = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <>{children}</>
    );
  }
  return <Login />;
};

export default connect(mapStateToProps)(Component);
