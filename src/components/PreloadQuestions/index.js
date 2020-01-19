import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/questions';

const PreloadQuestions = ({ fetchQuestions, children, isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      fetchQuestions();
    }
  }, [fetchQuestions, isLoading])
  if (isLoading) {
    return null;
  }
  return <>{children}</>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  }
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.questions.isLoaded === false || state.votes.isLoaded === false
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreloadQuestions);
