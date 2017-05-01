import axios from 'axios'
import initialState from '../initialState'
// import store from "../store"

const LOAD_ALL_POLLS = 'LOAD_ALL_POLLS'
const CREATE_POLL = 'CREATE_POLL'
const DELETE_POLL = 'DELETE_POLL'
const VIEW_POLL = 'VIEW_POLL'
const EDIT_POLL = 'UPDATE_POLL'
const VOTE_ON_POLL = 'VOTE_ON_POLL'

const initialPollState = {
  allPolls: [],
  allPollsByUser: [],
  selectedPoll: {}
}

const pollReducer = (state = initialPollState, action) => {
  const newState = Object.assign({}, state)
  console.log('action', action)
  switch (action.type) {
  case LOAD_ALL_POLLS:
    newState.allPolls = action.allPolls
    break
  case VIEW_POLL:
    newState.selectedPoll = action.poll
    break
  case CREATE_POLL:
    newState.allPolls = [...newState.allPolls, action.poll]
    break
  case DELETE_POLL:
    delete newState.allPolls[action.poll.id]
    break
  case VOTE_ON_POLL:
    console.log('hit action')
    newState.selectedPoll = action.poll
    break
  case EDIT_POLL:
    newState.selectedPoll = action.poll
    break
  default:
    return state
  }
  return newState
}

const loadAllPolls = polls => ({
  type: LOAD_ALL_POLLS,
  allPolls: polls
})

const loadAllUserPolls = userPolls => ({
  type: LOAD_ALL_POLLS,
  userPolls: userPolls
})

const addPoll = poll => ({
  type: CREATE_POLL, poll
})

const removePoll = pollId => ({
  type: DELETE_POLL, pollId
})

const updatePoll = updatedPoll => ({
  type: EDIT_POLL, updatedPoll
})

const viewPoll = poll => ({
  type: VIEW_POLL, poll
})

export const getAllPolls = () => dispatch => {
  return axios.get('http://localhost:3000/api/polls')
  .then(allPolls => {
    dispatch(loadAllPolls(allPolls.data))
  })
}

export const getAllPollsByUser = (userId) => dispatch => {
  return axios.get(`http://localhost:3000/api/polls/user/${userId}`)
  .then(allPolls => dispatch(loadAllUserPolls(allPolls.data)))
}

export const createPoll = (poll) => dispatch => {
  console.log('hit create')
  return axios.post('http://localhost:3000/api/polls', poll)
  .then(newPoll => dispatch(addPoll(newPoll)))
  .then(()=> console.log('finished create'))

}

export const voteOnPollChoice = (pollId, choiceId) => dispatch => {
  console.log('before axios')
  // editPoll(pollId, {totalVotes: pollVotes})
  return axios.post(`http://localhost:3000/api/polls/${pollId}/vote/${choiceId}`, {})
  .then(newVote => console.log('vote', newVote.data))
  // .then(updatedPoll => updatedPoll.data)
  .then(newVote => dispatch(updatePoll(newVote)))
  .then(() => console.log('after axios'))

}

export const editPoll = (pollId, pollChange) => dispatch => {
  return axios.put(`http://localhost:3000/api/polls/${pollId}`, pollChange)
  .then(updatedPoll => dispatch(updatePoll(updatedPoll)))
}

export const deletePoll = (pollId) => dispatch => {
  return axios.delete(`http://localhost:3000/api/polls/${pollId}`)
  .then(deletedPoll => dispatch(removePoll(deletedPoll)))
}

export default pollReducer
