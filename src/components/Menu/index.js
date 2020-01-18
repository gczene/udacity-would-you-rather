import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
const mapStateToProps = (state) => ({
  user: state.users.byIds[state.loggedInUser]
})

export default connect(mapStateToProps)(Nav);
