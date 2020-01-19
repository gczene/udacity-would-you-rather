import { connect } from 'react-redux';
import Nav from './Nav';
import { logout } from "../../actions/loggedinUser";

const mapStateToProps = (state) => ({
  user: state.users.byIds[state.loggedInUser]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
