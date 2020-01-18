export const PUT_VOTES_TO_STORE = 'PUT_VOTES_TO_STORE';
export const ADD_VOTE = 'ADD_VOTE';
export const RESET_VOTES = 'RESET_VOTES';

export const resetVotes = () => ({
  type: RESET_VOTES,
});

export const addVoteToVotes = (authedUser, qid, answer) => ({
  type: ADD_VOTE,
  authedUser,
  qid,
  answer,
});

export const putVotesToStore = (votes) => ({
  type: PUT_VOTES_TO_STORE,
  votes,
});