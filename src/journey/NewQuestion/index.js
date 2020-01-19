import { connect } from 'react-redux';
import NewQuestion from './NewQuestion';
import { saveQuestion } from '../../actions/questions';

const mapDispatchToProps = (dispatch) => ({
  submit: (data) => {dispatch(saveQuestion(data))}
});

const mapStateToProps = ({loggedInUser: authedUser}) => ({
  authedUser
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
