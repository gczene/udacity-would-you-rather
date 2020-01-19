export const PUT_VOTES_TO_STORE = 'PUT_VOTES_TO_STORE';
export const ADD_VOTE = 'ADD_VOTE';
export const RESET_VOTES = 'RESET_VOTES';
export const ADD_NEW_VOTE = 'ADD_NEW_VOTE';
export const UPDATE_VOTE_AFTER_SAVING = 'UPDATE_VOTE_AFTER_SAVING';

export const updateVoteAfterSave = (oldId, newId) => ({
  type: UPDATE_VOTE_AFTER_SAVING,
  oldId,
  newId,
});

export const addVote = (vote, id) => ({
  type: ADD_NEW_VOTE,
  vote,
  id
});

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